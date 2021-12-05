import { BingoBoard } from "./common.ts";
import {
  assertEquals,
  assertThrows,
  AssertionError,
  assert,
} from "https://deno.land/std@0.116.0/testing/asserts.ts";

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
      [3, 15, 0, 2, 22],
      [9, 18, 13, 17, 5],
      [19, 8, 7, 25, 23],
      [20, 11, 10, 24, 4],
      [14, 21, 16, 12, 6],
    ];
    const bingoBoard = new BingoBoard(inputBoard);
    const inputNumbers = [7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13];
    for (const inputNumber of inputNumbers) {
      bingoBoard.markCell(inputNumber);
    }
    assertEquals(bingoBoard.winningCol, [0, 13, 7, 10, 16]);
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
