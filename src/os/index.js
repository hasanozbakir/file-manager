import { getArchitecture } from "./architecture.js";
import { getCPUs } from "./cpus.js";
import { getEOL } from "./EOL.js";
import { getHomeDir } from "./homedir.js";
import { getUsername } from "./username.js";

export const os = async ([...args]) => {
  if (args.length !== 1) return console.log("Invalid input");
  switch (args[0].slice(2)) {
    case "EOL":
      return getEOL();
    case "cpus":
      return getCPUs();
    case "homedir":
      return getHomeDir();
    case "username":
      return getUsername();
    case "architecture":
      return getArchitecture();
    default:
      return console.log("Invalid input");
  }
};
