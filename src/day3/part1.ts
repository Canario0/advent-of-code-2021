export function solve(binaryNumbers: string[]): number {
  const numberCount = binaryNumbers
    .map((v) => v.split("").map((v) => Number(v)))
    .reduce(
      (acc, cv) => cv.map((v, i) => v + acc[i]),
      binaryNumbers[0].split("").map(() => 0)
    );
  const rates = numberCount.reduce(
    (acc, cv) => {
      acc.gammaRate += cv >= binaryNumbers.length / 2 ? "1" : "0";
      acc.epsilonRate += cv < binaryNumbers.length / 2 ? "1" : "0";
      return acc;
    },
    {
      gammaRate: "",
      epsilonRate: "",
    }
  );
  return parseInt(rates.gammaRate, 2) * parseInt(rates.epsilonRate, 2);
}
