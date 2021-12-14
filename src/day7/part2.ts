import { range } from "https://deno.land/x/it_range@v1.0.3/range.mjs";

export function solve(crabPositions: number[]): number {
  const crabPositionsSorted = crabPositions.sort();
  const minLine = crabPositions.at(0);
  const maxLine = crabPositions.at(-1);
  const fuel = [...range(minLine, maxLine)].map((line) =>
    crabPositionsSorted
      .map((crabLine) =>
        [...range(1, Math.abs(crabLine - line) + 1)].reduce(
          (acc, val) => acc + val,
          0
        )
      )
      .reduce((acc, fuel) => acc + fuel, 0)
  );
  return Math.min(...fuel);
}
