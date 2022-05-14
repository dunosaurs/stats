export function mode(arr: number[]): number {
  if (arr.length === 0) throw new Error("Cannot find mode of empty array");

  const counts = arr.reduce((a: Record<number, number>, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});
  const max = Math.max(...Object.values(counts));
  return Object.keys(counts).map((n) => parseFloat(n)).find((k) =>
    counts[k] === max
  ) || 0;
}
