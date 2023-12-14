const mongoose = require("mongoose");
require("dotenv").config();
const dbconnect = () => {
  // DB connect

  try {
    const connection = mongoose
      .connect(`${process.env.DB_URL}`)
      .then(() => console.log(`successfully connected to mongodb`));
  } catch (err) {
    console.log("Error: ", "Mongodb connection error-message", err);
    process.exit(1);
  }
};

module.exports = dbconnect;
