import { findTsConfigPath } from "@src/findTsConfigPath";

import fs from 'fs';
jest.mock('fs');
const mockFs = {
  existsSync: jest.mocked(fs.existsSync),
};

import path from 'path';
jest.mock('path');
const mockPath = {
  existsSync: jest.mocked(path.resolve).mockImplementation(
    (...args) => args.join('#')
  ),
};

describe('findTsConfigPath', () => {
  beforeEach(() => {
    Object.values(mockFs).forEach((mock) => {
      mock.mockClear();
    });
  });

  it('should throw an error if directory does not exist', () => {
    expect.assertions(2);

    const shouldThrow = () => {
      mockFs.existsSync.mockReturnValueOnce(false);

      findTsConfigPath('/missing');
    };

    expect(shouldThrow).toThrow(ReferenceError);
    expect(shouldThrow).toThrow('Directory /missing does not exist.');
  });

  it('should throw an error if file does not exist', () => {
    expect.assertions(2);

    const shouldThrow = () => {
      mockFs.existsSync
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(false);

      findTsConfigPath('/file');
    };

    expect(shouldThrow).toThrow(ReferenceError);
    expect(shouldThrow).toThrow('File /file#tsconfig.json does not exist.');
  });
});
