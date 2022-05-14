import { mean } from "./mean.ts";
import { standardDeviation } from "./spread.ts";

export function covariance(x: number[], y: number[]) {
  if (x.length !== y.length) {
    throw new Error("Cannot find covariance of arrays of different lengths");
  }

  const xMean = mean(x);
  const yMean = mean(y);

  return x.reduce((a, b, i) => a + (b - xMean) * (y[i] - yMean), 0) / x.length;
}

export function correlation(x: number[], y: number[]) {
  if (x.length !== y.length) {
    throw new Error("Cannot find correlation of arrays of different lengths");
  }

  const xStd = standardDeviation(x);
  const yStd = standardDeviation(y);

  return covariance(x, y) / (xStd * yStd);
}

export function linearRegression(y: number[], x: number[]) {
  if (x.length !== y.length) {
    throw new Error(
      "Cannot find linear regression of arrays of different lengths",
    );
  }

  const n = y.length;
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumXX = 0;
  let sumYY = 0;

  for (let i = 0; i < y.length; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += (x[i]*y[i]);
    sumXX += (x[i]*x[i]);
    sumYY += (y[i]*y[i]);
  } 

  const slope = (n * sumXY - sumX * sumY) / (n*sumXX - sumX * sumX);
  const intercept = (sumY - slope * sumX)/n;
  const r2 = Math.pow((n*sumXY - sumX*sumY)/Math.sqrt((n*sumXX-sumX*sumX)*(n*sumYY-sumY*sumY)),2);

  return { slope, intercept, r2 };
}
