const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DBURI);
    console.log("database is connected ...");
  } catch (error) {
    console.log("database failed ");
  }
};

module.exports = connectDB;
