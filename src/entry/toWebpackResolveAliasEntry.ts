// "@constants/*": ["./src/constants/*"],
// "@constants": ["./src/constants/index.ts"],
// alias: {
//   '@src': path.resolve('src'),
//   '@constants': path.resolve('src/constants'),
//   '@utils': path.resolve('src/utils'),
// },

// WebpackResolveAliasEntry
// WebpacConfigResolveAlias
import path from 'path';


const mapEntryKey = (entry: TsConfigPathEntry): string => (
  entry[0].replace(/\/\*$/, '')
);


const valueMap = (value: string): string => (path.resolve(
  value
    .replace(/^[/.\\*]*/, '')
    .replace(/[/\\*.]*$/, '')
));

const mapEntryValue = (entry: TsConfigPathEntry): string | string[] => {
  const mapped = entry[1].map(valueMap);

  return mapped.length === 1 ? String(mapped.pop()) : mapped;
};

export function toWebpackResolveAliasEntry(entry: TsConfigPathEntry): WebpackResolveAliasEntry {

  return [
    mapEntryKey(entry),
    mapEntryValue(entry),
  ];
}
