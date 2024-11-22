const mongoose = require("mongoose");

async function connectToDB(url) {
  try {
    await mongoose.connect(url + "task_management");
    console.log("Successfully connected to Database");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectToDB;
