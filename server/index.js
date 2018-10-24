require("dotenv").config();

const express = require("express");
const app = express();
const sequelize = require("./db");
const bodyParser = require("body-parser");
const book = require("./controllers/bookcontroller");

sequelize.sync();

app.use(bodyParser.json());
app.use(require("./middleware/headers"));

app.use("/api/book", book);

app.listen(4000, () => console.log("App listening on 4000"));
