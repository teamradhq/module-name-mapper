import { toModuleNameMapper } from '@src/config/jest/toModuleNameMapper';

import { toModuleNameMapperEntry } from '@src/config/jest/toModuleNameMapperEntry';
jest.mock('@src/entry/toModuleNameMapperEntry');
const mockToJestModuleNameMapperEntry = jest.mocked(toModuleNameMapperEntry);

describe('entry.toModuleNameMapper', () =>{
  beforeEach(() => {
    mockToJestModuleNameMapperEntry.mockClear()
      .mockImplementation((val) => val);
  });

  it('should map entries with entry function', () => {
    expect.hasAssertions();

    toModuleNameMapper([
      ['foo', ['bar']],
    ]);

    expect(mockToJestModuleNameMapperEntry)
      .toHaveBeenCalledWith([
        'foo',
        ['bar'],
      ]);
  });

  it('should create object from mapped entries', () => {
    expect.hasAssertions();

    const result = toModuleNameMapper([
      ['foo', ['bar']],
    ]);

    expect(result).toStrictEqual({
      'foo': ['bar'],
    });
  });
});
