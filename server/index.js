require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { robotsRouter } = require("./routers/robotRouters");
const { notFoundError, generalError } = require("./middlewares/error");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors);
app.use("/", robotsRouter);
app.use(generalError);
app.use(notFoundError);

module.exports = app;
