const express = require('express')
const router = express.Router()


router.use('/test', require('./testRoute'))

module.exports = router