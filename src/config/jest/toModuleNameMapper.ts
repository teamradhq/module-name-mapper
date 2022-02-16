import { toModuleNameMapperEntry } from '@src/config/jest/toModuleNameMapperEntry';

/**
 * Parse a set of TS Config path entries to a Jest config.moduleNameMapper object.
 *
 * @param entries
 */
export function toModuleNameMapper(entries: TsConfigPathEntry[]): JestConfigModuleNameMapper {
  return Object.fromEntries(entries.map(
    (entry) => toModuleNameMapperEntry(entry)
  ));
}
