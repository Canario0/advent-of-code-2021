import { assert } from "https://deno.land/std@0.116.0/testing/asserts.ts";

export class BingoBoard {
  private readonly board: number[][];
  private markedBoard: number[][];
  private rowSize: number;
  private colSize: number;

  constructor(board: number[][]) {
    assert(board.length > 0, "The input board must be be empty");
    assert(
      board[0].length > 0,
      "The input board must contain at least one non empty row"
    );
    this.board = board;
    this.markedBoard = board.map(() => []);
    this.rowSize = board[0].length;
    this.colSize = board.length;
  }

  get winningRow(): number[] | undefined {
    return this.markedBoard.find(
      (row) => row.filter((val) => !isNaN(val)).length == this.rowSize
    );
  }

  get winningCol(): number[] | undefined {
    for (let i = 0; i < this.colSize; i++) {
      const col = this.markedBoard.map((row) => row[i]).filter((val) => !isNaN(val));
      if (col.length === this.colSize) {
        return col;
      }
    }
    return undefined;
  }

  markCell(val: number) {
    return this.board.forEach((row, rowIndex) =>
      row.forEach((col, colIndex) => {
        if (col === val) {
          this.markedBoard[rowIndex][colIndex] = col;
        }
      })
    );
  }

  sumNotMarked(): number {
    return this.board
      .reduce(
        (acc, val, row) =>
          acc.concat(val.filter((_, col) => !this.isMarked(row, col))),
        [] as number[]
      )
      .reduce((acc, val) => acc + val, 0);
  }

  private isMarked(row: number, col: number): boolean {
    return this.board[row][col] === this.markedBoard[row][col];
  }
}
