import { solve } from "./part2.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { readAll } from "./utils.ts";

Deno.test({
  name: "demo part2",
  fn: () => {
    const input = readAll("./demo-input");
    assertEquals(solve(input), 61229);
  },
});

Deno.test({
  name: "input part2",
  fn: () => {
    const input = readAll("./input");
    assertEquals(solve(input), 983030);
  },
});
