const express = require("express");
const mongoose = require("mongoose");
const { upload, gfs } = require('../startup/db')
const path = require('path');
const fs = require('fs');
const uploadsDir = path.join(__dirname, '../uploads');
const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
    if(!req.file) {
        return res.status(400).send({ error: true, message: "No file uploaded" })
    }
    res.send(`File uploaded: ${req.file.originalname}`);
});

router.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    const imagePath = path.join(uploadsDir, filename);
  
    // Check if the file exists
    fs.access(imagePath, fs.constants.R_OK, (err) => {
      if (err) {
        // File does not exist or cannot be accessed
        return res.status(404).json({ error: 'Image not found' });
      }
  
      // Set the appropriate content type for the image
      const contentType = getContentType(filename);
      res.set('Content-Type', contentType);
  
      // Create a read stream for the image file
      const readStream = fs.createReadStream(imagePath);
  
      // Pipe the read stream to the response
      readStream.pipe(res);
    });
  });

  // Helper function to get the content type based on the file extension
function getContentType(filename) {
    const ext = path.extname(filename).toLowerCase();
    switch (ext) {
      case '.jpg':
      case '.jpeg':
        return 'image/jpeg';
      case '.png':
        return 'image/png';
      case '.gif':
        return 'image/gif';
      default:
        return 'application/octet-stream';
    }
  }
  

module.exports = router