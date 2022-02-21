import { mapEntriesToObject } from '@src/utils/mapEntriesToObject';
import { toModuleNameMapperEntry } from '@src/config/jest/toModuleNameMapperEntry';

/**
 * Parse a set of TS Config path entries to a Jest config.moduleNameMapper object.
 *
 * @param entries
 */
export function toModuleNameMapper(entries: TsConfigPathEntry[]): JestConfigModuleNameMapper {
  return mapEntriesToObject<JestConfigModuleNameMapper>(entries, toModuleNameMapperEntry);
}
