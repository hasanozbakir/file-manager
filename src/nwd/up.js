import path from "path";

export const up = ([...paths]) => {
  if (paths.length !== 0) return console.log("Invalid input");
  try {
    let currentDir = process.cwd();
    const newDir = path.resolve(currentDir, "..");
    if (newDir !== currentDir && path.relative(newDir, currentDir) !== "") {
      process.chdir(newDir);
    }
  } catch {
    console.log("Operation failed");
  }
};
