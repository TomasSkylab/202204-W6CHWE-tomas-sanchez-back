require("dotenv").config();
const chalk = require("chalk");
const debug = require("debug")("robots:root");
const app = require("./server");
const { initializeServer } = require("./server/initializeServer");

const port = process.env.PORT || 4000;

(async () => {
  try {
    await initializeServer(port, app);
  } catch (error) {
    debug(chalk.red("General error:", error.message));
  }
})();
