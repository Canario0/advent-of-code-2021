import { range } from "https://deno.land/x/it_range@v1.0.3/range.mjs";

export function solve(crabPositions: number[]): number {
  const crabPositionsSorted = crabPositions.sort();
  const minLine = crabPositions.at(0);
  const maxLine = crabPositions.at(-1);
  const fuel = [...range(minLine, maxLine! + 1)].map((line) =>
    crabPositionsSorted
      .map((crabLine) => Math.abs(crabLine - line))
      .reduce((acc, fuel) => acc + fuel, 0)
  );
  return Math.min(...fuel);
}
