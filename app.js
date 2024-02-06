import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import {
  up,
  cd,
  ls,
  cat,
  add,
  rn,
  cp,
  mv,
  rm,
  os,
  hash,
  compress,
  decompress,
} from "./src/index.js";

const inputFunctions = {
  up,
  cd,
  ls,
  cat,
  add,
  rn,
  cp,
  mv,
  rm,
  os,
  hash,
  compress,
  decompress,
};

const rl = readline.createInterface({ input, output });

const args = process.argv.slice(2);

let username = "user";
args.forEach((arg) => {
  if (arg.startsWith("--username=")) {
    username = arg.split("=")[1];
  }
});

console.log(`Welcome to the File Manager, ${username}!`);
console.info("You are currently in", process.cwd());

rl.on("line", async (input) => {
  const [...args] = input.trim().split(" ");
  const command = args[0];
  const commandArgs = args.slice(1);
  if (command === ".exit") {
    rl.close();
  } else if (command in inputFunctions) {
    try {
      await inputFunctions[command]([...commandArgs]);
    } catch {
      console.error("Operation failed");
    } finally {
      console.info("You are currently in", process.cwd());
    }
  } else {
    console.log("Invalid input");
  }
});

rl.on("close", () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
});
