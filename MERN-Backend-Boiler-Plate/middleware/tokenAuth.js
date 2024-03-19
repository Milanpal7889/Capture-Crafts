const jwt = require("jsonwebtoken")
const JWT_SECRET = "s5435es135f1se65f1s5f5se4f5s6efs350"//anything you can type anything here

const tokenAuth = async (req, res, next) => {
    const token = req.header("authToken")
    if (!token) {
        return res.status(401).send({error:"Access Denied"})
    }
    try {
        const verified = jwt.verify(token, JWT_SECRET)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).send({error:"Invalid Token"})
    }
}
module.exports = tokenAuth