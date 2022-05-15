require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/error");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(generalError);
app.use(notFoundError);

module.exports = app;
