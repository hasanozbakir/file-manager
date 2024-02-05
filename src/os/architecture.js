import os from "os";

export const getArchitecture = () => {
  try {
    console.log(`CPU Architecture: ${os.arch()}`);
  } catch {
    console.error("Operation failed");
  }
};
