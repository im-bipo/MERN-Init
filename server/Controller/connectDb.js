const mongoose = require("mongoose");

const connectDb = (url) => {
  mongoose
    .connect(url)
    .then((connection) => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDb;
