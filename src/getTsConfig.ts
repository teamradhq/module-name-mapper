import fs from 'fs';

import { findTsConfigPath } from '@src/findTsConfigPath';

/**
 * Try to parse tsconfig.json or yield an empty object.
 */
export function getTsConfig() {
  try {
    const filepath = findTsConfigPath();
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  } catch (error) {

    return {};
  }
}
