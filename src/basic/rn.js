import { promises as fs } from "fs";
import path from "path";

export const rn = async ([...paths]) => {
  if (paths.length !== 2) return console.log("Invalid input");
  const oldPath = paths[0];
  const newName = paths[1];

  try {
    const currentDir = process.cwd();
    const fullPath = path.join(currentDir, oldPath);
    const newFullPath = path.join(currentDir, newName);

    await fs.rename(fullPath, newFullPath);
    // console.log(`File renamed from ${oldPath} to ${newName}`);
  } catch {
    console.log("Operation failed");
  }
};
