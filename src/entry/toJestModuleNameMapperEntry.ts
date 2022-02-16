
const mapEntryKey = (entry: TsConfigPathEntry): string => (
  entry[0].replace(/\/\*$/, '/(.*)')
);

const valueMap = (value: string) => (
  value.replace(/^[/.\\*]*/, '<rootDir>/')
    .replace(/\/\*$/, '/$1')
);

const mapEntryValue = (entry: TsConfigPathEntry): string | string[] => {
  const mapped = entry[1].map(valueMap);

  return mapped.length === 1 ? String(mapped.pop()) : mapped;
};

/**
 * Map a TS Config path entry to a jest.moduleNameMapper entry.
 *
 * @param entry
 */
export function toJestModuleNameMapperEntry(entry: TsConfigPathEntry): JestModuleNameMapperEntry {

  return [
    mapEntryKey(entry),
    mapEntryValue(entry),
  ];
}
