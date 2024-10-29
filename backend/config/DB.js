require('dotenv').config()
const mongoose = require('mongoose');

const connDB = async () => {
  try {
    const conn = await mongoose.connect(PROCESS.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connDB;
