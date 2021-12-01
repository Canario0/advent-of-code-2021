export function solve(measurements: number[]): number {
  const windows = [];
  for (let i = 0; i < measurements.length - 2; i++) {
    windows.push(measurements[i] + measurements[i + 1] + measurements[i + 2]);
  }
  let previousWindow = windows[0];
  let increaseCount = 0;
  for (const window of windows.slice(1)) {
    if (window - previousWindow > 0) {
      increaseCount++;
    }
    previousWindow = window;
  }
  return increaseCount;
}
