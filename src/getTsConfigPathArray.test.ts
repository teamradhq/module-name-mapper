import { getTsConfigPathArray } from '@src/getTsConfigPathEntry';

describe('getTsConfigPathArray', () => {
  let config: TsConfig;
  beforeEach(() => {
    config = {
      compilerOptions: {}
    };
  });

  it('should return empty array if paths is missing', () => {
    expect.hasAssertions();

    expect(getTsConfigPathArray(config))
      .toStrictEqual([]);
  });

  it('should return an array of path entries', () => {
    expect.hasAssertions();
    config.compilerOptions.paths = {
      '@components/*': ['./src/components/*'],
      '@components': ['./src/components/index.ts'],
    };

    expect(getTsConfigPathArray(config))
      .toStrictEqual([
        ['@components/*', ['./src/components/*']],
        ['@components', ['./src/components/index.ts']],
      ]);
  });
});
