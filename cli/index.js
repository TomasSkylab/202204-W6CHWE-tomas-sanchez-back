const { program } = require("commander");

program.option("-p, --port <port>", "port for the Api");

program.parse();

const cliOptions = program.opts();

module.exports = cliOptions;