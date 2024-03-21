const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenAuth = require("../middleware/tokenAuth");
const User = require("../model/photographer");
const { body, validationResult } = require("express-validator");
const router = express.Router();


router.post('/all', async(req,res)=>{
    const users = await User.find()
    res.send({error:false, users:users})
})

router.post('/signup', [
    body('name', 'Please enter a valid name').not().isEmpty(),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
], async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:true, message: errors.array()})
    }
    const {name, email, password} = req.body
    try {
        let user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User already exists"})
        }
        user = new User({
            name,
            email,
            password
        })
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        await user.save()

        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 360000}, (err, token) => {
            if(err) throw err
            res.json({token})
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send({error:true, message:'Server Error'})
    }
})

router.post('/login', async(req,res)=>{
    const {email, password} = req.body
    try {
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error:true, message: "User does not exist"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({error:true, message: "Incorrect password"})
        }
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 360000}, (err, token) => {
            if(err) throw err
            res.json({token})
        })
    } catch (err) {
        console.error(err.message)
        res.status(500).send({error:true, message:'Server Error'})
    }
})

router.get('/me', tokenAuth, async(req,res)=>{
    try {
        const user = await User.findById(req.user.id)
        res.send({user})
    } catch (err) {
        console.error(err.message)
        res.status(500).send({error:true, message:'Server Error'})
    }
})

router.put('/update', tokenAuth, async(req,res)=>{
    try {
        const user = await User.findById(req.user.id)
        user.name = req.body.name
        await user.save()
        res.send({user})
    } catch (err) {
        console.error(err.message)
        res.status(500).send({ error:true, message:'Server Error'})
    }
})

router.delete('/delete', tokenAuth, async(req,res)=>{
    try {
        const user = await User.findById(req.user.id)
        await user.remove()
        res.send({error:false,message: "User deleted"})
    } catch (err) {
        console.error(err.message)
        res.status(500).send({ error:true, message:'Server Error'})
    }
})

module.exports = router