const express = require('express')
const router = express.Router()


router.use('/user', require('./userRoute'))
router.use('/admin', require('./adminRoute'))
// router.use('/photographer', require('./photographer'))
// router.use("/booking", require("./booking"))
// router.use("/image", require("./imageUpload"))

module.exports = router