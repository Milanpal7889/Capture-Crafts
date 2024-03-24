const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokenAuth = require("../middleware/tokenAuth");
const User = require("../model/photographer");
const { body, validationResult } = require("express-validator");
const cityModal = require("../model/city");
const photographerModal = require("../model/photographer");
const user = require("../model/user");
const router = express.Router();
const JWT_SECRET = "thisissecratekey";

router.get('/all', async(req,res)=>{
    const photographers = await photographerModal.find()
    res.send({error:false, photographers})
})

router.post('/signup', [
    body('contact','Please enter a valid contact').isNumeric(),
    body('shopadress', 'Please enter a valid shopadress').not().isEmpty(),
    body('city', 'Please enter a valid city name').not().isEmpty(),
],tokenAuth, async(req,res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({error:true, message: errors.array()})
    }
    const {contact, image, shopadress, city, price} = req.body
    try {
        let userDatanew = await user.findById(userData.id)
        let photographerexists = await photographerModal.findOne({email: user.email})
        if(photographerexists){
            return res.status(400).json({message: "Photographer already exists"})
        }
        console.log(userDatanew)
        const Photographer = new photographerModal({
            userid: userDatanew._id,
            name: userDatanew.name,
            password: userDatanew.password,
            email: userDatanew.email,
            contact,
            shopadress,
            city,
            image,
            price
        })
        userDatanew.city = await cityModal.findOne({cityname: city}).id
        console.log(userDatanew.city)
        await Photographer.save()

        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(payload, JWT_SECRET, {expiresIn: 360000}, (err, token) => {
            if(err) throw err
            res.json({error:false,token})
        })
    } catch (err) {
        console.error(err.message)  
        res.status(500).send({error:true, error_message:err, message:'Server Error'})
    }
})

router.post('/login', async(req,res)=>{
    const {email, password} = req.body
    try {
        let photographerexists = await photographerModal.findOne({email})
        if(!photographerexists){
            return res.status(400).json({error:true, message: "photographer does not exist"})
        }
        const isMatch = await bcrypt.compare(password, photographerexists.password)
        if(!isMatch){
            return res.status(400).json({error:true, message: "Incorrect password"})
        }
        const payload = {
            photographer: {
                id: photographerexists.id
            }
        }
        jwt.sign(payload, JWT_SECRET, {expiresIn: 360000}, (err, token) => {
            if(err) throw err
            res.json({error:false,token})
        })
    } catch (err){
        console.error(err.message)
        res.status(500).send({error:true, message:'Server Error'})
    }
})

router.get('/me', tokenAuth, async(req,res)=>{
    try {
        const Photographer = await photographerModal.findById(req.user.id)
        res.send({Photographer})
    } catch (err) {
        console.error(err.message)
        res.status(500).send({error:true, message:'Server Error'})
    }
})

router.put('/update', tokenAuth, async(req,res)=>{
    try {
        const Photographer = await photographerModal.findById(req.user.id)
        reqBody = {...req.body}

    } catch (err) {
        console.error(err.message)
        res.status(500).send({ error:true, message:'Server Error'})
    }
})

router.delete('/delete', tokenAuth, async(req,res)=>{
    try {
        const photographer = await photographerModal.findByIdAndDelete(req.user.id)
        res.send({error:false, userData:photographer, message: "User deleted"})
    } catch (err) {
        console.error(err.message)
        res.status(500).send({ error:true, message:'Server Error'})
    }
})

module.exports = router