import { promises as fs } from "fs";
import path from "path";

export const ls = async ([...paths]) => {
  if (paths.length !== 0) return console.log("Invalid input");
  try {
    const currentDir = process.cwd();
    const contents = await fs.readdir(currentDir);

    let files = [];
    let folders = [];

    for (const item of contents) {
      const itemPath = path.join(currentDir, item);

      const stats = await fs.stat(itemPath);
      if (stats.isDirectory()) {
        folders.push({ Name: item, Type: "directory" });
      } else {
        files.push({ Name: item, Type: "file" });
      }
    }

    folders.sort((a, b) => a.Name.localeCompare(b.Name));
    files.sort((a, b) => a.Name.localeCompare(b.Name));

    const directoryContents = [...folders, ...files];

    console.table(directoryContents);
  } catch {
    console.log("Operation failed");
  }
};
