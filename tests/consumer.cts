import * as api from '@lp-labs/array-flatten-one';
import { flattenOne } from '@lp-labs/array-flatten-one';
console.log(flattenOne([1, [2, 3], 4]));
// @ts-expect-error invalid argument must be rejected by declarations
api.flattenOne('items');
