export function mapEntriesToObject<T>(entries: TsConfigPathEntry[], callable: CallableFunction): T {
  return Object.fromEntries(
    entries.map((entry) => callable(entry))
  ) as T;
}
