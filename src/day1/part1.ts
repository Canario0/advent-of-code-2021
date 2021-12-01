
export function solve(measurements: number[]):number{
  let increaseCount = 0;
  let previousMeasurement:number = measurements[0];
  measurements = measurements.slice(1)
  for(let measurement of measurements){
    if (measurement - previousMeasurement > 0){
      increaseCount ++;
    }
    previousMeasurement = measurement;
  }
  return increaseCount;
}
