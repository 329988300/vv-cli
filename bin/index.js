#!/usr/bin/env node
const lib = require("./lib");
const argv = require("process").argv;

const command = argv[2];
const options = argv.slice(3);
let [option, param] = options;
option = option.replace("-", "");

console.log(option, param);

if (command && lib[command]) {
  lib[command](option, param);
} else {
  console.log("命令不存在");
}
