const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require("path");
const routes = require('./routes/routes');
const app = express();

require("dotenv").config();

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/views')); 

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.get("/", function (req, res) {
  res.render("home");
});  

app.all("*", (req, res) => {
  res.status(404).send("Page not found");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/quiz", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});