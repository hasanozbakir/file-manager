import fs from "fs/promises";
import path from "path";

export const cd = async ([...paths]) => {
  if (paths.length !== 1) return console.log("Invalid input");
  const pathToDirectory = paths[0];

  try {
    const newDir = path.resolve(pathToDirectory);
    const currentDir = process.cwd();

    if (newDir === currentDir) {
      console.log(`You are already in ${newDir}`);
      return;
    }

    await fs.access(newDir);
    const stats = await fs.stat(newDir);

    if (stats.isDirectory()) {
      process.chdir(newDir);
    }
  } catch {
    console.log("Operation failed");
  }
};
