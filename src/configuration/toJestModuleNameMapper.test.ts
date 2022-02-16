import { toJestModuleNameMapper } from '@src/configuration/toJestModuleNameMapper';

import { toJestModuleNameMapperEntry } from '@src/entry/toJestModuleNameMapperEntry';
jest.mock('@src/entry/toJestModuleNameMapperEntry');
const mockToJestModuleNameMapperEntry = jest.mocked(toJestModuleNameMapperEntry);

describe('entry.toJestModuleNameMapper', () =>{
  beforeEach(() => {
    mockToJestModuleNameMapperEntry.mockClear()
      .mockImplementation((val) => val);
  });

  it('should map entries with entry function', () => {
    expect.hasAssertions();

    toJestModuleNameMapper([
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

    const result = toJestModuleNameMapper([
      ['foo', ['bar']],
    ]);

    expect(result).toStrictEqual({
      'foo': ['bar'],
    });
  });
});
