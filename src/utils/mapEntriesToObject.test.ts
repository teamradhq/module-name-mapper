import { mapEntriesToObject } from '@src/utils/mapEntriesToObject';

const makeEntries = (): TsConfigPathEntry[] => [
  ['foo', ['bar']],
  ['baz', ['blitz']],
];
describe('utils.mapEntriesToObject', () => {
  const mockCallable = jest.fn(([a, b]) => [a, b]);
  let entries: TsConfigPathEntry[];

  beforeEach(() => {
    entries = makeEntries();
    mockCallable.mockClear();
  });

  it('should map entries to object with callable', () => {
    expect.hasAssertions();

    const result = mapEntriesToObject(entries, mockCallable);

    expect(mockCallable).toHaveBeenCalledWith(['foo', ['bar']]);
    expect(mockCallable).toHaveBeenCalledWith(['baz', ['blitz']]);
    expect(mockCallable).toHaveBeenCalledTimes(2);
    expect(result).toStrictEqual({
      foo: ['bar'],
      baz: ['blitz'],
    });
  });
});
