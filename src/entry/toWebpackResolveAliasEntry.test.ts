import { toWebpackResolveAliasEntry } from '@src/entry/toWebpackResolveAliasEntry';

import path from 'path';
jest.mock('path');
const mockPathResolve = jest.mocked(path.resolve);

describe('entry.toWebpackResolveAliasEntry', () => {
  beforeEach(() => {
    mockPathResolve.mockClear()
      .mockImplementation((...args) => (
        '/resolved/' + args.join('#')
      ));
  });

  it('should map key to webpack resolve format', () => {
    expect.hasAssertions();

    const [result] = toWebpackResolveAliasEntry([
      '@constants/*',
      ['./src/constants/*'],
    ]);

    expect(result).toStrictEqual('@constants');
  });

  it('should use path.resolve to map module paths', () => {
    expect.hasAssertions();

    toWebpackResolveAliasEntry([
      '@constants/*',
      ['./src/constants/*'],
    ]);

    expect(mockPathResolve).toHaveBeenCalledWith('src/constants');
  });

  it('should map single path to string', () => {
    expect.hasAssertions();

    const [, result] = toWebpackResolveAliasEntry([
      '@constants/*',
      ['./src/constants/*'],
    ]);

    expect(result).toStrictEqual('/resolved/src/constants');
  });

  it('should map multiple paths to string array', () => {
    expect.hasAssertions();

    const [, result] = toWebpackResolveAliasEntry([
      '@constants/*',
      ['./src/constants/*', 'tmp/constants/*'],
    ]);

    expect(result).toStrictEqual([
      '/resolved/src/constants',
      '/resolved/tmp/constants',
    ]);
  });
});
