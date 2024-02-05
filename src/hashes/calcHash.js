import fs from "fs";
import crypto from "crypto";

export const calcHash = ([...paths]) => {
  if (paths.length !== 1) return console.log("Invalid input");
  const filePath = paths[0];

  const hash = crypto.createHash("sha256");
  const fileStream = fs.createReadStream(filePath);

  fileStream.on("error", (err) => console.log("Operation failed"));

  fileStream.on("data", (chunk) => {
    hash.update(chunk);
  });

  fileStream.on("end", () => {
    const fileHash = hash.digest("hex");
    console.log(fileHash);
  });
};
