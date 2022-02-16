import { getTsConfig } from '@src/getTsConfig';

import fs from 'fs';
jest.mock('fs');
const mockFs = {
  readFileSync: jest.mocked(fs.readFileSync),
};

import { findTsConfigPath } from '@src/findTsConfigPath';
jest.mock('@src/findTsConfigPath');
const mockFindTsConfigPath = jest.mocked(findTsConfigPath);

describe('getTsConfig', () => {
  beforeEach(() => {
    mockFs.readFileSync.mockClear();
    mockFindTsConfigPath.mockClear();
  });

  it('should return an empty object if there is an error', () => {
    expect.hasAssertions();
    mockFindTsConfigPath.mockImplementationOnce(() => {
      throw new ReferenceError('Test');
    });

    expect(getTsConfig()).toStrictEqual({});
  });

  it('should read the contents of existing tsconfig', () => {
    expect.hasAssertions();
    mockFs.readFileSync.mockReturnValue('{ "data": "json" }');
    mockFindTsConfigPath.mockReturnValue('filepath');

    const result = getTsConfig();

    expect(result).toStrictEqual({ data: 'json' });
  });
});
