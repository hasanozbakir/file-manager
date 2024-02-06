import os from "os";

export const getUsername = () => {
  try {
    const userInfo = os.userInfo();
    console.log(`Current System User Name: ${userInfo.username}`);
  } catch {
    console.error("Operation failed");
  }
};
