const express = require('express')
const router = express.Router()


router.use('/user', require('./userRoute'))
router.use('/admin', require('./adminRoute'))
router.use('/photographer', require('./photographer'))


module.exports = router