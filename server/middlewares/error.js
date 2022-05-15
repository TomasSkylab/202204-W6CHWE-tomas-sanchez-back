const chalk = require("chalk");
const debug = require("debug")("robots:server:errors");

const notFoundError = (req, res) => {
  res.status(404).json({ msg: "Endpoint not found" });
  debug(chalk.red("Endpoint not found"));
};

// eslint-disable-next-line no-unused-vars
const generalError = (error, req, res, next) => {
  debug(chalk.red(error.message));
  res.status(500).json({ msg: "Server error" });
};

module.exports = { notFoundError, generalError };
