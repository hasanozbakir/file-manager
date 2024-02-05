import os from "os";

export const getCPUs = () => {
  try {
    const cpus = os.cpus();
    console.log(`Total CPUs: ${cpus.length}`);

    cpus.forEach((cpu, index) => {
      console.log(`CPU ${index + 1}:`);
      console.log(`\tModel: ${cpu.model}`);
      console.log(`\tClock Rate: ${(cpu.speed / 1000).toFixed(2)} GHz`);
    });
  } catch {
    console.error("Operation failed");
  }
};
