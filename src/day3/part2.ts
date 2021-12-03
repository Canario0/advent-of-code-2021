function getMostCommon(binaryNumbers: string[], index: number = 0): string {
  const common = binaryNumbers.reduce(
    (acc, cv) => Number(cv.charAt(index)) + acc,
    0
  );
  return common >= binaryNumbers.length / 2 ? "1" : "0";
}

function getLeastCommon(binaryNumbers: string[], index: number = 0): string {
  return getMostCommon(binaryNumbers, index) == "0" ? "1" : "0";
}

export function solve(binaryNumbers: string[]): number {
  let oxygenRatio: string[] = binaryNumbers;
  let i = 0;
  do {
    const common = getMostCommon(oxygenRatio, i);
    oxygenRatio = oxygenRatio.filter((value) => value.charAt(i) === common);
    i++;
  } while (oxygenRatio.length > 1);

  let co2Ratio: string[] = binaryNumbers;
  i = 0;
  do {
    const leastCommon = getLeastCommon(co2Ratio, i);
    co2Ratio = co2Ratio.filter((value) => value.charAt(i) === leastCommon);
    i++;
  } while (co2Ratio.length > 1);

  return parseInt(oxygenRatio[0], 2) * parseInt(co2Ratio[0], 2);
}
