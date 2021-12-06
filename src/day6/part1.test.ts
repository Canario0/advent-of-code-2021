import { solve } from "./part1.ts";
import { assertEquals } from "https://deno.land/std@0.116.0/testing/asserts.ts";

Deno.test({
  name: "demo day1",
  fn: () => {
    const input = [3, 4, 3, 1, 2];
    let sol = solve(18, input);
    assertEquals(sol, 26);
    sol = solve(80, input);
    assertEquals(sol, 5934);
  },
});

Deno.test({
  name: "input day1",
  fn: () => {
    const input = [
      5, 1, 1, 5, 4, 2, 1, 2, 1, 2, 2, 1, 1, 1, 4, 2, 2, 4, 1, 1, 1, 1, 1, 4, 1,
      1, 1, 1, 1, 5, 3, 1, 4, 1, 1, 1, 1, 1, 4, 1, 5, 1, 1, 1, 4, 1, 2, 2, 3, 1,
      5, 1, 1, 5, 1, 1, 5, 4, 1, 1, 1, 4, 3, 1, 1, 1, 3, 1, 5, 5, 1, 1, 1, 1, 5,
      3, 2, 1, 2, 3, 1, 5, 1, 1, 4, 1, 1, 2, 1, 5, 1, 1, 1, 1, 5, 4, 5, 1, 3, 1,
      3, 3, 5, 5, 1, 3, 1, 5, 3, 1, 1, 4, 2, 3, 3, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1,
      2, 1, 1, 4, 1, 3, 2, 5, 2, 1, 1, 1, 4, 2, 1, 1, 1, 4, 2, 4, 1, 1, 1, 1, 4,
      1, 3, 5, 5, 1, 2, 1, 3, 1, 1, 4, 1, 1, 1, 1, 2, 1, 1, 4, 2, 3, 1, 1, 1, 1,
      1, 1, 1, 4, 5, 1, 1, 3, 1, 1, 2, 1, 1, 1, 5, 1, 1, 1, 1, 1, 3, 2, 1, 2, 4,
      5, 1, 5, 4, 1, 1, 3, 1, 1, 5, 5, 1, 3, 1, 1, 1, 1, 4, 4, 2, 1, 2, 1, 1, 5,
      1, 1, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 4, 2, 1, 1, 1,
      2, 5, 1, 4, 1, 1, 1, 4, 1, 1, 5, 4, 4, 3, 1, 1, 4, 5, 1, 1, 3, 5, 3, 1, 2,
      5, 3, 4, 1, 3, 5, 4, 1, 3, 1, 5, 1, 4, 1, 1, 4, 2, 1, 1, 1, 3, 2, 1, 1, 4,
    ];
    const sol = solve(80, input);
    assertEquals(sol, 4655);
  },
});