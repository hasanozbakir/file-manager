import fs from "fs";
import { createBrotliDecompress } from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const pipelineAsync = promisify(pipeline);

export async function decompress([...paths]) {
  if (paths.length !== 2) return console.log("Invalid input");
  const sourcePath = paths[0];
  const destinationPath = paths[1];

  const sourceStream = fs.createReadStream(sourcePath);
  const destinationStream = fs.createWriteStream(destinationPath);
  const decompressStream = createBrotliDecompress();

  try {
    await pipelineAsync(sourceStream, decompressStream, destinationStream);
  } catch {
    console.error("Operation failed");
  }
}
