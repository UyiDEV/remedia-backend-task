const mongoose = require("mongoose");
const {envVariable} = require("./utils");

const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(envVariable.MONGODB_URI);
    console.log(`Db connection established: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConfig;