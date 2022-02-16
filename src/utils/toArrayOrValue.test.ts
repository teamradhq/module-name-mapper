import { toArrayOrValue } from '@src/utils/toArrayOrValue';

type TestCase = [
  string,
  number[],
  number | number[]
]

describe('utils.toArrayOrValue', () => {
  const cases: TestCase[] = [
    ['single value', [1], 1],
    ['array of values', [1, 2, 3], [1, 2, 3]],
    ['empty array', [], []],
  ];
  it.each(cases)('should yield %s', (_, input, expected) => {
    expect.hasAssertions();

    expect(toArrayOrValue(input))
      .toStrictEqual(expected);
  });
});
