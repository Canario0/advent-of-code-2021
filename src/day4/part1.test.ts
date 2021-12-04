import { BingoBoard, solve } from "./part1.ts";
import {
  assertEquals,
  assertThrows,
  AssertionError,
  assert,
} from "https://deno.land/std@0.116.0/testing/asserts.ts";
import { readAll } from "../utils.ts";

Deno.test({
  name: "Test Invalid BingoBoard Construction",
  fn: () => {
    assertThrows(() => new BingoBoard([]), AssertionError);
    assertThrows(() => new BingoBoard([[]]), AssertionError);
    assert(new BingoBoard([[1]]));
  },
});

Deno.test({
  name: "Test Winning Row",
  fn: () => {
    const inputBoard = [
      [1, 4, 5, 6],
      [1, 4, 5, 7],
    ];
    const bingoBoard = new BingoBoard(inputBoard);
    bingoBoard.markCell(1);
    bingoBoard.markCell(4);
    bingoBoard.markCell(5);
    bingoBoard.markCell(6);
    assertEquals(bingoBoard.winningRow, inputBoard[0]);
  },
});

Deno.test({
  name: "Test Winning Col",
  fn: () => {
    const inputBoard = [
      [1, 1, 1, 6],
      [5, 2, 2, 7],
      [6, 3, 3, 7],
    ];
    const bingoBoard = new BingoBoard(inputBoard);
    bingoBoard.markCell(1);
    bingoBoard.markCell(2);
    bingoBoard.markCell(3);
    assertEquals(bingoBoard.winningCol, [1, 2, 3]);
  },
});

Deno.test({
  name: "Test Sum Not Marked",
  fn: () => {
    const inputBoard = [
      [1, 1, 1, 1],
      [1, 2, 1, 1],
      [1, 3, 1, 1],
    ];
    const bingoBoard = new BingoBoard(inputBoard);
    bingoBoard.markCell(1);
    bingoBoard.markCell(2);
    bingoBoard.markCell(3);
    assertEquals(bingoBoard.sumNotMarked(), 0);
  },
});

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
    assertEquals(sol, 4512);
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

