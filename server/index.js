//dotenv for .env file
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000; //process.env is the port given to me by the hosting service

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
// allows me to read incoming requests and parse them from json
app.use(express.json()); //applies to any incoming req


// Connect to DB
mongoose.connect(process.env.MDB_CONNECT, 
(err)=>{
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
});

// setting up routes

app.use("/auth", require("./routers/userRouter"));