require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

const corsOption = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "PUT", "DELETE", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOption));
app.use(express.json());

// create the database connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("mongodb is connected"))
  .catch((e) => console.log(e));

// routes configuration


// Global error handler
app.use((req ,res ,next , err) => {
    console.log(err.stack)
    res.status(500).json({
        success:false,
        message:"Something went wrong"
    })
})


app.listen(PORT , () => {
    console.log(`Server is listening on Port ${PORT}`)
})