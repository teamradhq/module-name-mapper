import { toJestModuleNameMapperEntry } from '@src/entry/toJestModuleNameMapperEntry';

/**
 * Parse a set of TS Config path entries to a Jest config.moduleNameMapper object.
 *
 * @param entries
 */
export function toJestModuleNameMapper(entries: TsConfigPathEntry[]): JestModuleNameMapper {
  return Object.fromEntries(entries.map(
    (entry) => toJestModuleNameMapperEntry(entry)
  ));
}
