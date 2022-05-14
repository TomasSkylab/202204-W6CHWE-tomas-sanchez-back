const { program } = require("commander");

program.option("-p, --puerto <puerto>", "puerto for the Api");

program.parse();

const cliOptions = program.opts();

module.exports = cliOptions;
