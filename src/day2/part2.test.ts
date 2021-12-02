import { solve } from "./part2.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { readAll } from "../utils.ts";

Deno.test({
  name: "demo day1",
  fn: () => {
    const input = [
      "forward 5",
      "down 5",
      "forward 8",
      "up 3",
      "down 8",
      "forward 2",
    ];
    const sol = solve(input);
    assertEquals(sol, 900);
  },
});

Deno.test({
  name: "input day1",
  fn: () => {
    const input = readAll("./input");
    const sol = solve(input);
    assertEquals(sol, 1942068080);
  },
});
