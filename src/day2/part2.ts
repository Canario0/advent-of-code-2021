export function solve(commands: string[]): number {
  return commands
    .reduce(
      (acc, val) => {
        const command: string[] = val.split(" ");
        const distance = Number(command[1]);
        switch (command[0]) {
          case "forward":
            acc[0] += distance;
            acc[1] += acc[2] * distance;
            break;
          case "down":
            acc[2] += distance;
            break;
          case "up":
            acc[2] -= distance;
            break;
          default:
            break;
        }
        return acc;
      },
      [0, 0, 0]
    )
    .slice(0, 2)
    .reduce((acc, val) => acc * val, 1);
}
