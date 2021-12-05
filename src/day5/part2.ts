function evaluateCoordinates(coordinatesString: string[]) {
  const regex = new RegExp(/^(\d+),(\d+)\s+->\s+(\d+),(\d+)$/);
  const coordinates = coordinatesString.map((value) => {
    const match = regex
      .exec(value)!
      .slice(1)
      .map((val) => parseInt(val));
    return match;
  });
  const horizontalCoordinates = coordinates
    .filter(([x1, , x2]) => x1 === x2)
    .reduce((acc, [x1, y1, x2, y2]) => {
      acc.push([x1, y1]);
      acc.push([x2, y2]);
      const start = Math.min(y1, y2);
      const end = Math.max(y1, y2);
      for (let i = start + 1; i < end; i++) {
        acc.push([x1, i]);
      }
      return acc;
    }, [] as number[][]);
  const verticalCoordinates = coordinates
    .filter(([, y1, , y2]) => y1 === y2)
    .reduce((acc, [x1, y1, x2, y2]) => {
      acc.push([x1, y1]);
      acc.push([x2, y2]);
      const start = Math.min(x1, x2);
      const end = Math.max(x1, x2);
      for (let i = start + 1; i < end; i++) {
        acc.push([i, y1]);
      }
      return acc;
    }, [] as number[][]);

  const diagonalLines = coordinates
    .filter(([x1, y1, x2, y2]) => x1 !== x2 && y1 !== y2)
    .reduce((acc, [x1, y1, x2, y2]) => {
      const xDirection = x1 <= x2 ? 1 : -1;
      const yDirection = y1 <= y2 ? 1 : -1;
      for (let i = 0; i <= Math.abs(x1 - x2); i++) {
        acc.push([x1 + i * xDirection, y1 + i * yDirection]);
      }
      return acc;
    }, [] as number[][]);
  return horizontalCoordinates.concat(verticalCoordinates, diagonalLines);
}
export function solve(coordinateStrings: string[]): number {
  const coordinates = evaluateCoordinates(coordinateStrings);
  const map = coordinates.reduce((acc, [x, y]) => {
    const key = `${x}, ${y}`;
    return acc.set(key, (acc.get(key) ?? 0) + 1);
  }, new Map() as Map<string, number>);
  return Array.from(map.values()).filter((val) => val >= 2).length;
}
