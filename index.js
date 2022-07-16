require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db")
const hostname = '0.0.0.0'
const studentRoute = require("./routes/studentRoute")

// middlewares
app.use(express.json());
app.use(cors());

// database connection
connection();

// student route
app.use("/api/", studentRoute);


const port = process.env.PORT || 8080;
app.listen(port, hostname,  console.log(`Listening on port ${port}...`));