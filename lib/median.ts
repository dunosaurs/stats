export function median(arr: number[]): number {
  if (arr.length === 0) throw new Error("Cannot find median of empty array");

  const sorted = arr.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}

export function medianLow(arr: number[]): number {
  if (arr.length === 0) throw new Error("Cannot find median of empty array");

  const sorted = arr.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted[mid];
}

export function medianHigh(arr: number[]): number {
  if (arr.length === 0) throw new Error("Cannot find median of empty array");

  const sorted = arr.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted[mid - 1];
}
