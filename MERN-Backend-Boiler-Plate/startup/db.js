const mongoose = require("mongoose");
mongoDBurl = "mongodb+srv://milanpaul212:milanpaul212@bookstore-backend.0dbc4xx.mongodb.net/?retryWrites=true&w=majority&appName=Bookstore-backend";


module.exports = () => {
  return mongoose
    .connect(mongoDBurl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("error connecting to MongoDB: ", err));
};
