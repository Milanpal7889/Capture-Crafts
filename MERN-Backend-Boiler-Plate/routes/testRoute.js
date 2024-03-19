const express = require('express')
const router = express.Router()

router.get("/", async(req, res) => {
    return res.send("Hello this is milan this is test route")
})

module.exports = router