# stats

> Deno library for statistics

```typescript
import { mean, mode, median, linearRegression } from "https://deno.land/x/stats/mod.ts";

console.log(mean([1, 2, 3, 4])) // 2.5
console.log(mode([1, 2, 3, 4, 4, 4, 3, 9, 5])) // 4
console.log(median([1, 2, 3, 4, 5])) // 3

console.log(linearRegression([1, 2, 3], [1, 2, 3])) // { slope: 1, intercept: 0, r2: 1 }
```
