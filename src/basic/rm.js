import { promises as fs } from "fs";
import path from "path";

export const rm = async ([...paths]) => {
  if (paths.length !== 1) return console.log("Invalid input");
  const filePath = paths[0];

  try {
    const currentDir = process.cwd();
    const fullPath = path.join(currentDir, filePath);

    await fs.unlink(fullPath);
    // console.log(`File ${filePath} has been deleted`);
  } catch (err) {
    console.log("Operation failed");
  }
};
