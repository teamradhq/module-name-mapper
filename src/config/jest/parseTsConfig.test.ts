import { parseTsConfig } from '@src/config/jest/parseTsConfig';

import { getTsConfig } from '@src/getTsConfig';
jest.mock('@src/getTsConfig');
const mockGetTsConfig = jest.mocked(getTsConfig);

import { getTsConfigPathArray } from '@src/getTsConfigPathEntry';
jest.mock('@src/getTsConfigPathEntry');
const mockGetTsConfigPathArray = jest.mocked(getTsConfigPathArray);

import { toModuleNameMapper } from '@src/config/jest/toModuleNameMapper';
jest.mock('@src/config/jest/toModuleNameMapper');
const mockToModuleNameMapper = jest.mocked(toModuleNameMapper);

const mocks = [
  mockGetTsConfig,
  mockGetTsConfigPathArray,
  mockToModuleNameMapper,
];

describe('config.jest.parseTsConfig', () => {
  beforeEach(() => {
    mocks.forEach((mock) => {
      mock.mockClear();
    });

    mockGetTsConfig.mockReturnValue({ foo: ['bar'] });
    mockGetTsConfigPathArray.mockReturnValue([
      ['foo', ['bar']]
    ]);
    mockToModuleNameMapper.mockImplementation((val) => Object.fromEntries(val));
  });

  it('should read tsconfig', () => {
    expect.assertions(1);

    parseTsConfig();

    expect(mockGetTsConfig).toHaveBeenCalledTimes(1);
  });

  it('should parse the tsconfig path entries', () => {
    expect.assertions(2);

    parseTsConfig();

    expect(mockGetTsConfigPathArray).toHaveBeenCalledWith({ foo: ['bar'] });
    expect(mockGetTsConfigPathArray).toHaveBeenCalledTimes(1);
  });

  it('should map the path entries to module name map', () => {
    expect.assertions(2);

    parseTsConfig();

    expect(mockToModuleNameMapper).toHaveBeenCalledWith([
      ['foo', ['bar']]
    ]);
    expect(mockToModuleNameMapper).toHaveBeenCalledTimes(1);
  });

  it('should return the expected config object', () => {
    expect.assertions(1);

    const result = parseTsConfig();

    expect(result).toStrictEqual({
      foo: ['bar'],
    });
  });
});
