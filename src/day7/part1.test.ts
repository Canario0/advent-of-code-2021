import { solve } from "./part1.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { readAll } from "../utils.ts";

Deno.test({
  name: "demo day1",
  fn: () => {
    const input = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
    assertEquals(solve(input), 37);
  },
});

Deno.test({
  name: "input day1",
  fn: () => {
    const input = readAll("./input").map((item) => Number(item));
    assertEquals(solve(input), 355150);
  },
});
