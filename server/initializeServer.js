require("dotenv").config();
const debug = require("debug")("robots:server");
const chalk = require("chalk");

const initializeServer = (port, app) => {
  const server = app.listen(port, () => {
    debug(chalk.green(`Server listening on port ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.bgRed.white("Server error"));

    if (error.code === "EADDRINUSE") {
      debug(chalk.bgRed.white(`Port ${port} is busy`));
    }
  });
};

module.exports = { initializeServer };
