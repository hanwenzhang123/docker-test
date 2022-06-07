const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const routes = require('./routes')

require("dotenv").config();

const app = express();
app.use(cors())
app.use(express.json())
app.use(routes)

mongoose
  .connect("mongodb://127.0.0.1:27017/mydb", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const port = 3000;
app.listen(port, () => console.log("Server running..."));