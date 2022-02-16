import { toJestModuleNameMapper } from '@src/mapper/toJestModuleNameMapper';

import { toJestModuleNameMapperEntry } from '@src/mapper/toJestModuleNameMapperEntry';
jest.mock('@src/mapper/toJestModuleNameMapperEntry');
const mockToJestModuleNameMapperEntry = jest.mocked(toJestModuleNameMapperEntry);

describe('mapper.toJestModuleNameMapper', () =>{
  beforeEach(() => {
    mockToJestModuleNameMapperEntry.mockClear()
      .mockImplementation((val) => val);
  });

  it('should map entries with mapper function', () => {
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
