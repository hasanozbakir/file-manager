import fs from "fs/promises";
import { createReadStream } from "fs";
import { finished } from "stream/promises";
import path from "path";

export const cat = async ([...paths]) => {
  if (paths.length !== 1) return console.log("Invalid input");
  const filePath = paths[0];
  const absolutePath = path.resolve(filePath);

  try {
    await fs.access(absolutePath);

    const readable = createReadStream(absolutePath, { encoding: "utf8" });
    readable.on("data", (chunk) => {
      console.log(chunk);
    });

    await finished(readable);
  } catch {
    console.log("Operation failed");
  }
};
