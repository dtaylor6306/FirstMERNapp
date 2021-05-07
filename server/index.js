//dotenv for .env file
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000; //process.env is the port given to me by the hosting service

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

mongoose.connect(process.env.MDB_CONNECT, 
(err)=>{
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
});