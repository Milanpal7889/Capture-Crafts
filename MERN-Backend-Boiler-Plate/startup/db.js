const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
mongoDBurl =
  "mongodb+srv://milanpaul212:milanpaul212@bookstore-backend.0dbc4xx.mongodb.net/?retryWrites=true&w=majority&appName=Bookstore-backend";

  const conn = () => {
    return mongoose
      .connect(mongoDBurl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.log("error connecting to MongoDB: ", err));
  };

// creating storage 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
})

const upload = multer({ storage: storage });

module.exports = {
  conn,
  upload
}
