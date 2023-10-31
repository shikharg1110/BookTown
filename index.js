const express = require('express');
const app = express();

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware required to parse json request body
app.use(express.json());

// import routes for TODO API
const todoRoutes = require("./routes/todos");

// mount the todos API
app.use("/api/v1", todoRoutes);

// server start
app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
})

// db connection
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
    res.send(`<h1> This is homepage </h1>`);
})