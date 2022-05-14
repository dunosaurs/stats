export function mean(arr: number[]): number {
  if (arr.length === 0) throw new Error("Cannot find mean of empty array");
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function geometricMean(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Cannot find geometric mean of empty array");
  }
  return Math.pow(arr.reduce((a, b) => a * b, 1), 1 / arr.length);
}

export function harmonicMean(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Cannot find harmonic mean of empty array");
  }
  return arr.length / arr.reduce((a, b) => a + 1 / b, 0);
}
