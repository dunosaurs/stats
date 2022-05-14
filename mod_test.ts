import { assertEquals } from "./test_deps.ts";
import { correlation, covariance, linearRegression, mean, median, mode, standardDeviation, variance } from "./mod.ts";

Deno.test("REAME test", () => {
  assertEquals(mean([1, 2, 3, 4]), 2.5)
  assertEquals(mode([1, 2, 3, 4, 4, 4, 3, 9, 5]), 4)
  assertEquals(median([1, 2, 3, 4, 5]), 3)

  assertEquals(linearRegression([1, 2, 3], [1, 2, 3]), { slope: 1, intercept: 0, r2: 1 })
})

Deno.test("Test mean", () => {
  // Test mean
  assertEquals(mean([1, 2, 3]), 2);
  assertEquals(mean([1, 2, 3, 4]), 2.5);
});

Deno.test("Test median", () => {
  // Test median
  assertEquals(median([1, 2, 3]), 2);
  assertEquals(median([1, 2, 3, 4]), 2.5);
});

Deno.test("Test mode", () => {
  // Test mode
  assertEquals(mode([1, 2, 3]), 1);
  assertEquals(mode([1, 2, 3, 4, 4, 5, 4, 3]), 4);
});

Deno.test("Test relations", () => {
  // Test covariance
  assertEquals(covariance([1, 2, 3], [1, 2, 3]), 2/3);
  assertEquals(covariance([1, 2, 3], [0, -1, -2]), -2/3);

  // Test correlation
  assertEquals(correlation([1, 2, 3], [1, 2, 3]), 1);
  assertEquals(correlation([1, 2, 3], [0, -1, -2]), -1);

  // Test linear regression
  assertEquals(linearRegression([1, 2, 3], [1, 2, 3]).slope, 1);
  assertEquals(linearRegression([1, 2, 3], [1, 2, 3]).intercept, 0);
  assertEquals(linearRegression([1, 2, 3], [1, 2, 3]).r2, 1);
});

Deno.test("Test spread", () => {
  // Test standard deviation
  assertEquals(standardDeviation([1, 2, 3]), Math.sqrt(2/3));
  assertEquals(standardDeviation([1, 2, 3, 4, 5]), Math.sqrt(2));

  // Test variance
  assertEquals(variance([1, 2, 3]), 2/3);
  assertEquals(variance([1, 2, 3, 4, 5]), 2);
});