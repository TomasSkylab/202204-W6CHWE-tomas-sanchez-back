require("dotenv").config();
const debug = require("debug")("robots:root");
const chalk = require("chalk");
const { connectDataBase } = require("./db/index");
const app = require("./server");

const { initializeServer } = require("./server/initializeServer");

const port = process.env.PORT || 4000;
const dataBaseUrl = process.env.MONGO_URL;

(async () => {
  try {
    await connectDataBase(dataBaseUrl);
    await initializeServer(port, app);
  } catch (error) {
    debug(chalk.red("General error:", error.message));
  }
})();
