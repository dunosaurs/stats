export function standardDeviation(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Cannot find standard deviation of empty array");
  }

  return Math.sqrt(variance(arr));
}

export function variance(arr: number[]): number {
  if (arr.length === 0) throw new Error("Cannot find variance of empty array");

  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  return arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / arr.length;
}
