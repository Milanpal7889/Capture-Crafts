const mongoose = require("mongoose");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

mongoDBurl =
  "mongodb+srv://milanpaul212:milanpaul212@bookstore-backend.0dbc4xx.mongodb.net/?retryWrites=true&w=majority&appName=Bookstore-backend";

const conn = mongoose.createConnection(mongoDBurl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialize GridFS
let gfs;
conn.once("open", () => {
  console.log("MongoDB database connection established successfully");
  gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: "uploads" });
});

// creating storage 
const storage = new GridFsStorage({
  url: mongoDBurl,
  file: (req, file) => {
      return new Promise((resolve, reject) => {
          const filename = file.originalname;
          const fileInfo = {
              filename: filename,
              bucketName: 'uploads',
          };
          resolve(fileInfo);
      });
  }
})

const upload = multer({ storage });

module.exports = {
  conn,
  gfs,
  upload
}
