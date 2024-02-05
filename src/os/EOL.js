import os from "os";

export const getEOL = () => {
  try {
    console.log(JSON.stringify(os.EOL));
  } catch {
    console.error("Operation failed");
  }
};
