import { toArrayOrValue } from '@src/utils/toArrayOrValue';

/**
 * Map a the values of a TS config path `entry` to a value or
 * array of values using the provided `mapper` function.
 *
 * @param entry
 * @param mapper
 */
export function mapEntryValue(
  entry: TsConfigPathEntry,
  mapper: (value: string) => string,
): string | string[] {
  const value = entry[1];

  return toArrayOrValue(value.map(mapper));
}
