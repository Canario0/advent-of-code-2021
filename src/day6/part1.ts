class FishGroup {
  timer = 0;
  fishCount: number;

  constructor(timer: number, fishCount: number) {
    this.timer = timer;
    this.fishCount = fishCount;
  }

  updateTimer(): FishGroup | null {
    if (!this.timer) {
      this.timer = 6;
      return this.giveBirth();
    }
    this.timer--;
    return null;
  }

  giveBirth(): FishGroup {
    return new FishGroup(8, this.fishCount);
  }
}

export function solve(days: number, fishes: number[]): number {
  let fishGroups = Array.from(
    fishes
      .sort()
      .reduce((acc, val) => {
        acc.set(val, (acc.get(val) ?? 0) + 1);
        return acc;
      }, new Map<number, number>())
      .entries()
  ).map(([timer, fishCount]) => new FishGroup(timer, fishCount));
  for (let day = 0; day < days; day++) {
    fishGroups = Array.from(
      fishGroups
        .concat(
          fishGroups
            .map((fishGroup) => fishGroup.updateTimer())
            .filter((fishGroups) => fishGroups != null) as FishGroup[]
        )
        .reduce((acc, fishGroup) => {
          if (!acc.get(fishGroup.timer)) {
            acc.set(fishGroup.timer, fishGroup);
          } else {
            acc.get(fishGroup.timer)!.fishCount += fishGroup.fishCount;
          }
          return acc;
        }, new Map<number, FishGroup>())
        .values()
    );
  }
  return fishGroups
    .map((fishGroup) => fishGroup.fishCount)
    .reduce((acc, val) => acc + val, 0);
}
