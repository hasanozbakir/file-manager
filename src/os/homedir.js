import os from "os";

export const getHomeDir = () => {
  try {
    console.log(`Home Directory: ${os.homedir()}`);
  } catch {
    console.error("Operation failed");
  }
};
