import fs from 'fs';
import path from 'path';

export function findTsConfigPath(dirname = process.cwd()) {
  if (!fs.existsSync(path.resolve(dirname))) {
    throw new ReferenceError(`Directory ${dirname} does not exist.`);
  }

  const file = path.resolve(dirname, 'tsconfig.json');
  if (!fs.existsSync(file)) {
    throw new ReferenceError(`File ${file} does not exist.`);
  }

  return file;
}
