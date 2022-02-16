import { toJestModuleNameMapperEntry } from '@src/mapper/toJestModuleNameMapperEntry';

describe('mapper.toJestModuleNameMapperEntry', () =>{
  it('should parse module alias to jest format', () => {
    expect.hasAssertions();

    const [result] = toJestModuleNameMapperEntry([
      '@constants/*',
      ['./src/constants/*'],
    ]);

    expect(result).toStrictEqual('@constants/(.*)');
  });

  it('should parse module paths to jest format', () => {
    expect.hasAssertions();

    const [, result] = toJestModuleNameMapperEntry([
      '@constants/*',
      ['./src/constants/*'],
    ]);

    expect(result).toStrictEqual('<rootDir>/src/constants/$1');
  });

  it('should map multiple module paths to array', () => {
    expect.hasAssertions();

    const result = toJestModuleNameMapperEntry([
      '@constants/*',
      [
        './src/constants/*',
        './tmp/constants/*',
      ],
    ]);

    expect(result).toStrictEqual([
      '@constants/(.*)',
      [
        '<rootDir>/src/constants/$1',
        '<rootDir>/tmp/constants/$1',
      ],
    ]);
  });
});
