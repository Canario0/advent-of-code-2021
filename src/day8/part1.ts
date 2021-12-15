export function solve(fourDigits: string[][]): number {
  return fourDigits
    .map((row) => {
      const digitsCount = row.filter(
        (digit) =>
          digit.length === 2 ||
          digit.length === 4 ||
          digit.length === 3 ||
          digit.length === 7
      );
      return digitsCount.length;
    })
    .reduce((acc, val) => acc + val, 0);
}
