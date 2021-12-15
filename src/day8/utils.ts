function fileRead(fileRoute: string): string {
  return Deno.readTextFileSync(fileRoute);
}

export function readAll(fileRoute: string): string[][][] {
  const data: string[][][] = fileRead(fileRoute)
    .split("\n")
    .map((line) => line.replace("\r", ""))
    .slice(0, -1)
    .map((line) => line.split(" | ").map((patterns) => patterns.split(" ")));
  return data;
}
