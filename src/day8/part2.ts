function intersectionWithArray(set: Set<string>, array: string[]) {
  return new Set(array.filter((x) => set.has(x)));
}

function getMapping(signalPatterns: string[]): Map<string, number> {
  const splitSignalPatterns = signalPatterns.map((digit) => digit.split(""));

  const one = new Set(splitSignalPatterns.find((digit) => digit.length === 2));
  const four = new Set(splitSignalPatterns.find((digit) => digit.length === 4));
  const seven = new Set(
    splitSignalPatterns.find((digit) => digit.length === 3)
  );
  const eight = new Set(
    splitSignalPatterns.find((digit) => digit.length === 7)
  );
  const two = new Set(
    splitSignalPatterns.find(
      (digit) =>
        digit.length === 5 &&
        intersectionWithArray(one, digit).size === 1 &&
        intersectionWithArray(seven, digit).size === 2 &&
        intersectionWithArray(four, digit).size === 2
    )!
  );
  const three = new Set(
    splitSignalPatterns.find(
      (digit) =>
        digit.length === 5 &&
        intersectionWithArray(one, digit).size === 2 &&
        intersectionWithArray(seven, digit).size === 3 &&
        intersectionWithArray(four, digit).size === 3 &&
        intersectionWithArray(two, digit).size === 4
    )!
  );
  const five = new Set(
    splitSignalPatterns.find(
      (digit) =>
        digit.length === 5 &&
        intersectionWithArray(one, digit).size === 1 &&
        intersectionWithArray(seven, digit).size === 2 &&
        intersectionWithArray(four, digit).size === 3 &&
        intersectionWithArray(two, digit).size === 3 &&
        intersectionWithArray(three, digit).size === 4
    )!
  );
  const zero = new Set(
    splitSignalPatterns.find(
      (digit) =>
        digit.length === 6 &&
        intersectionWithArray(one, digit).size === 2 &&
        intersectionWithArray(seven, digit).size === 3 &&
        intersectionWithArray(four, digit).size === 3 &&
        intersectionWithArray(two, digit).size === 4 &&
        intersectionWithArray(three, digit).size === 4 &&
        intersectionWithArray(five, digit).size === 4
    )!
  );
  const six = new Set(
    splitSignalPatterns.find(
      (digit) =>
        digit.length === 6 &&
        intersectionWithArray(one, digit).size === 1 &&
        intersectionWithArray(seven, digit).size === 2 &&
        intersectionWithArray(four, digit).size === 3 &&
        intersectionWithArray(two, digit).size === 4 &&
        intersectionWithArray(three, digit).size === 4 &&
        intersectionWithArray(five, digit).size === 5 &&
        intersectionWithArray(zero, digit).size === 5
    )!
  );
  const nine = new Set(
    splitSignalPatterns.find(
      (digit) =>
        digit.length === 6 &&
        intersectionWithArray(one, digit).size === 2 &&
        intersectionWithArray(seven, digit).size === 3 &&
        intersectionWithArray(four, digit).size === 4 &&
        intersectionWithArray(two, digit).size === 4 &&
        intersectionWithArray(three, digit).size === 5 &&
        intersectionWithArray(five, digit).size === 5 &&
        intersectionWithArray(zero, digit).size === 5 &&
        intersectionWithArray(six, digit).size === 5
    )!
  );
  return new Map([
    [[...zero].sort().join(""), 0],
    [[...one].sort().join(""), 1],
    [[...two].sort().join(""), 2],
    [[...three].sort().join(""), 3],
    [[...four].sort().join(""), 4],
    [[...five].sort().join(""), 5],
    [[...six].sort().join(""), 6],
    [[...seven].sort().join(""), 7],
    [[...eight].sort().join(""), 8],
    [[...nine].sort().join(""), 9],
  ]);
}

function fixWiring(
  digits: string[],
  letterMapping: Map<string, string>
): string[] {
  return digits.map((digit) =>
    digit
      .split("")
      .map((c) => letterMapping.get(c) ?? c)
      .sort()
      .join("")
  );
}

export function solve(input: string[][][]): number {
  return input
    .map(([signalPatterns, digits]) => {
      signalPatterns = signalPatterns.map((digit) =>
        digit.split("").sort().join("")
      );
      digits = digits.map((digit) => digit.split("").sort().join(""));
      const digitMapping = getMapping(signalPatterns);
      return digits
        .map((digit) => digitMapping.get(digit) ?? 0)
        .reduce((acc, value) => acc * 10 + value, 0);
    })
    .reduce((acc, val) => acc + val, 0);
}
