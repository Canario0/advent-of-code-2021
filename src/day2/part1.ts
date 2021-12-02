export function solve(commands: string[]): number {
  return commands
    .reduce(
      (acc, val) => {
        const command: string[] = val.split(" ");
        const distance = Number(command[1]);
        switch (command[0]) {
          case "forward":
            acc[0] += distance;
            break;
          case "down":
            acc[1] += distance;
            break;
          case "up":
            acc[1] -= distance;
            break;
          default:
            break;
        }
        return acc;
      },
      [0, 0]
    ).reduce((acc, val) => acc * val, 1);
}
