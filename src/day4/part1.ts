import {BingoBoard} from "./common.ts"

function game(bingoNumbers: number[], bingoBoards: BingoBoard[]): number {
  bingoNumbers
    .slice(0, 4)
    .forEach((bingoNumber) =>
      bingoBoards.forEach((bingoBoard) => bingoBoard.markCell(bingoNumber))
    );
  for (const bingoNumber of bingoNumbers.slice(4)) {
    bingoBoards.forEach((bingoBoard) => bingoBoard.markCell(bingoNumber));
    const winningBoard = bingoBoards.find(
      (bingoBoard) => bingoBoard.winningCol || bingoBoard.winningRow
    );
    if (winningBoard != null) {
      return bingoNumber * winningBoard!.sumNotMarked();
    }
  }
  return 0;
}

export function solve(gameInput: number[][]): number {
  const gameNumbers = gameInput[0];
  const chunkSize = 5;
  const boards = gameInput
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
  return game(gameNumbers, boards);
}
