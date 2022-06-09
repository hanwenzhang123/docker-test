const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require('./routes/routes');

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

mongoose
  .connect("mongodb://127.0.0.1:27017/quiz", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});