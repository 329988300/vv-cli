#!/usr/bin/env node

const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");
const arg = hideBin(process.argv)
const cli = yargs(arg)



cli.usage("Usage: $0 <command> [options]")
    .alias("h", "help")
    .alias("v", "version")
    .wrap(cli.terminalWidth())
    .epilogue("hello vv-cli")
    .argv;
