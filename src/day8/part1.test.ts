import { solve } from "./part1.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { readAll } from "./utils.ts";

Deno.test({
  name: "demo day1",
  fn: () => {
    const input = readAll("./demo-input").map((entry) => entry[1]);
    assertEquals(solve(input), 26);
  },
});

Deno.test({
  name: "input day1",
  fn: () => {
    const input = readAll("./input").map((entry) => entry[1]);
    assertEquals(solve(input), 355);
  },
});
