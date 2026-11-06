export function flattenOne<T>(items: readonly (T | readonly T[])[]): T[] {
  if (!Array.isArray(items)) throw new TypeError('Expected array');
  return items.flat(1) as T[];
}
