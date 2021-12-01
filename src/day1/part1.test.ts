import { solve } from "./part1.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { readAll } from "../utils.ts";

Deno.test({
  name: "demo day1",
  fn: () => {
    const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const sol = solve(input);
    assertEquals(sol, 7);
  },
});

Deno.test({
  name: "inpute day1",
  fn: () => {
    const input = readAll("./input1").map((item) => Number(item));
    const sol = solve(input);
    assertEquals(sol, 1462);
  },
});
