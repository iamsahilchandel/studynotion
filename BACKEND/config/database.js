const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = process.env.DB_URL;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log('Database Connected!');
  } catch (error) {
    console.error('Database Connection Failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
