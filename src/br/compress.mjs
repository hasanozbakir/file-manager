import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const pipe = promisify(pipeline);

export async function compress([...paths]) {
  if (paths.length !== 2) return console.log("Invalid input");
  const inputPath = paths[0];
  const outputPath = paths[1];

  const source = fs.createReadStream(inputPath);
  const destination = fs.createWriteStream(outputPath);
  const brotli = zlib.createBrotliCompress();

  try {
    await pipe(source, brotli, destination);
  } catch {
    console.error("Operation failed");
  }
}
