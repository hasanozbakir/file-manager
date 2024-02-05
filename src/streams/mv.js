import { promises as fs } from "fs";
import path from "path";
import { createReadStream, createWriteStream } from "fs";

export const mv = async ([...paths]) => {
  if (paths.length !== 2) return console.log("Invalid input");
  const sourcePath = paths[0];
  const destPath = paths[1];

  return new Promise(async (resolve, reject) => {
    try {
      const currentDir = process.cwd();
      const fullSourcePath = path.join(currentDir, sourcePath);

      let fullDestPath;
      if (path.extname(destPath)) {
        fullDestPath = path.join(currentDir, destPath);
      } else {
        const destFileName = path.basename(sourcePath);
        fullDestPath = path.join(currentDir, destPath, destFileName);
        await fs.mkdir(destPath, { recursive: true });
      }

      const readStream = createReadStream(fullSourcePath);
      const writeStream = createWriteStream(fullDestPath);

      readStream.on("error", (error) => {
        reject(error);
      });
      writeStream.on("error", (error) => {
        reject(error);
      });
      writeStream.on("finish", async () => {
        try {
          await fs.unlink(fullSourcePath);
          resolve();
        } catch (error) {
          reject(error);
        }
      });

      readStream.pipe(writeStream);
    } catch (err) {
      reject(err);
    }
  });
};
