const express = require("express");
const erroMiddelware = require("../Backend/middelware/error");
const app = express();

app.use(express.json());

// Define your middleware

// Use error handling middleware here.

// Route imports

const product = require("./routes/ProductROute");

app.use("/api/v1", product);
app.use(erroMiddelware); 

module.exports = app;
