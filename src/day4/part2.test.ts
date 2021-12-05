import { solve } from "./part2.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { readAll } from "../utils.ts";

function parseInput(path: string): number[][] {
  const input = readAll(path);
  const result: number[][] = [];
  result.push(input[0].split(",").map((val) => Number(val)));
  result.push(
    ...input
      .slice(1)
      .filter((val) => val)
      .map((row) =>
        row
          .split(" ")
          .filter((val) => val)
          .map((val) => Number(val))
      )
  );
  return result;
}

Deno.test({
  name: "demo day1",
  fn: () => {
    const input = parseInput("./input_test");
    const sol = solve(input);
    assertEquals(sol, 1924);
  },
});

Deno.test({
  name: "input day1",
  fn: () => {
    const input = parseInput("./input");
    const sol = solve(input);
    assertEquals(sol, 60368);
  },
});
