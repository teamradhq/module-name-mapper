import { mapEntryValue } from '@src/utils/mapEntryValue';

import { toArrayOrValue } from '@src/utils/toArrayOrValue';
jest.mock('@src/utils/toArrayOrValue');

describe('utils.mapEntryValue', () => {
  const mockMapper = jest.fn((value: string): string => value);
  const mockToArrayOrValue = jest.mocked(toArrayOrValue);

  beforeEach(() => {
    mockToArrayOrValue.mockClear();
    mockMapper.mockClear();
  });

  it('should map the entry values using the supplied function', () => {
    expect.hasAssertions();

    mapEntryValue([
      'string',
      ['first', 'second'],
    ], mockMapper);

    expect(mockMapper).toHaveBeenCalledWith('first', 0, ['first', 'second']);
    expect(mockMapper).toHaveBeenCalledWith('second', 1, ['first', 'second']);
    expect(mockMapper).toHaveBeenCalledTimes(2);
  });

  it('should return first value or array', () => {
    expect.hasAssertions();

    mapEntryValue([
      'string',
      ['first', 'second'],
    ], mockMapper);

    expect(mockToArrayOrValue).toHaveBeenCalledWith(['first', 'second']);
    expect(mockToArrayOrValue).toHaveBeenCalledTimes(1);
  });
});
