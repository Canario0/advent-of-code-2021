import { solve } from "./part1.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { readAll } from "../utils.ts";

Deno.test({
  name: "demo day1",
  fn: () => {
    const input = [
      "00100",
      "11110",
      "10110",
      "10111",
      "10101",
      "01111",
      "00111",
      "11100",
      "10000",
      "11001",
      "00010",
      "01010",
    ];
    const sol = solve(input);
    assertEquals(sol, 198);
  },
});

Deno.test({
  name: "input day1",
  fn: () => {
    const input = readAll("./input");
    const sol = solve(input);
    assertEquals(sol, 2595824);
  },
});
