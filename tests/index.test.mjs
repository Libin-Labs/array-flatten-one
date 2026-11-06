import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('flattens one level', () => {
  assert.deepEqual(api.flattenOne([1, [2, 3], 4]), [1, 2, 3, 4]);
});
test('keeps deeper arrays nested', () => {
  assert.deepEqual(api.flattenOne([[[1]]]), [[1]]);
});
test('handles empty arrays', () => {
  assert.deepEqual(api.flattenOne([]), []);
});
test('preserves order', () => {
  assert.deepEqual(api.flattenOne([[1, 2], [3]]), [1, 2, 3]);
});
test('does not mutate source', () => {
  const x = [1, [2]];
  api.flattenOne(x);
  assert.deepEqual(x, [1, [2]]);
});
test('rejects non-array input', () => {
  assert.throws(() => api.flattenOne(1), TypeError);
});
