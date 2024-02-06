import { promises as fs } from "fs";
import path from "path";

export const add = async ([...paths]) => {
  const fileName = paths[0];
  if (paths.length !== 1 || fileName.split(".").length < 2)
    return console.log("Invalid input");
  const filePath = path.join(process.cwd(), fileName);

  try {
    const fd = await fs.open(filePath, "w");
    await fd.close();
  } catch {
    console.log("Operation failed");
  }
};
