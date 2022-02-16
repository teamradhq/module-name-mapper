import fs from 'fs';

import { findTsConfigPath } from '@src/findTsConfigPath';

export function getTsConfig() {
  try {
    const filepath = findTsConfigPath();
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
  } catch (error) {

    return {};
  }
}
