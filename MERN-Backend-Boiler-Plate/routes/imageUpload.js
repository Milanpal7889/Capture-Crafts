const express = require("express");
const mongoose = require("mongoose");
const { upload, gfs } = require('../startup/db')
const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
    if(!req.file) {
        return res.status(400).send({ error: true, message: "No file uploaded" })
    }

    res.send(`File uploaded: ${req.file.originalname}`);
});

router.get('/:filename' , async (req, res) => {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    if(!file || file.length === 0) {
        return res.status(404).send({ error: true, message: "File not found" })
    }
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
})

module.exports = router