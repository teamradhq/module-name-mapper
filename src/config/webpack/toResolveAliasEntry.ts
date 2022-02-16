import path from 'path';
import { mapEntryValue } from '@src/utils/mapEntryValue';

/**
 * Remove special characters from the end of `entry` key.
 *
 * @param entry
 */
function mapEntryKey(entry: TsConfigPathEntry): string {
  return entry[0].replace(/\/\*$/, '');
}

/**
 * Remove special characters from start of module `value`
 * and resolve to a complete path.
 *
 * @param value
 */
function valueMap(value: string): string {
  return (path.resolve(
    value
      .replace(/^[/.\\*]*/, '')
      .replace(/[/\\*.]*$/, '')
  ));
}

/**
 * Yield an entry for a webpack `config.resolve.alias`.
 *
 * @param entry
 */
export function toResolveAliasEntry(entry: TsConfigPathEntry): WebpackResolveAliasEntry {
  return [
    mapEntryKey(entry),
    mapEntryValue(entry, valueMap),
  ];
}
