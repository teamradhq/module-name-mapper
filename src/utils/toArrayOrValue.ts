/**
 * Get array of items or first item if there is only one.
 * @param array
 */
export function toArrayOrValue<T>(array: T[]): T | T[] {
  const input = [...array];

  if (input.length === 1) {
    return input.pop() as T;
  }

  return input;
}
