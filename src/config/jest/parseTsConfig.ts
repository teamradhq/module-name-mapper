import { toModuleNameMapper } from './toModuleNameMapper';
import { getTsConfig } from '@src/getTsConfig';
import { getTsConfigPathArray } from '@src/getTsConfigPathEntry';

/**
 * Read tsconfig.json and parse its path entries to a
 * Jest `config.moduleNameMapper`.
 *
 * @see {./toModuleNameMapper}
 */
export function parseTsConfig(): JestConfigModuleNameMapper {
  const config = getTsConfig();
  const entries = getTsConfigPathArray(config);

  return toModuleNameMapper(entries);
}
