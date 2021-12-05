import { BingoBoard } from "./common.ts";

function game(
  bingoNumbers: number[],
  bingoBoards: BingoBoard[]
): [number, BingoBoard[]] {
  for (const [i, bingoNumber] of bingoNumbers.entries()) {
    bingoBoards.forEach((bingoBoard) => bingoBoard.markCell(bingoNumber));
    const winningBoards = bingoBoards.filter(
      (bingoBoard) => {
        return bingoBoard.winningCol || bingoBoard.winningRow
      }
    );
    if (winningBoards.length) {
      return [i, winningBoards];
    }
  }
  return [NaN, []];
}

export function solve(gameInput: number[][]): number {
  let gameNumbers = gameInput[0];
  const chunkSize = 5;
  let boards = gameInput
    .slice(1)
    .reduce((acc, val, i) => {
      const chunkIndex = Math.floor(i / chunkSize);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(val);
      return acc;
    }, [] as number[][][])
    .map((val) => new BingoBoard(val));
  let i = -1;
  let winningBoards: BingoBoard[];
  do {
    gameNumbers = gameNumbers.slice(i + 1);
    [i, winningBoards] = game(gameNumbers, boards);
    if (isNaN(i) || !winningBoards.length) {
      return 0;
    }
    boards = boards.filter((bingoBoard) => !winningBoards.includes(bingoBoard));
  } while (boards.length);
  return gameNumbers[i] * winningBoards[0]!.sumNotMarked();
}
