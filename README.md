---
CS602 Final Project: A Shopping Cart Application
---
## Boilerplate Code
> npm install express\
> npm install mongodb\
> npm install mongoose

```js
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/mydb", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const port = 3000;
app.listen(port, () => console.log("Server running..."));
```

## Start the App
1. **Please run `yarn install` to install all the dependencies first**
2. **Please run `node models/InitialDB.js` to store initial data to database**
3. **Please run `yarn start` to start the server**
