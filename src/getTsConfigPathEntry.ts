export function getTsConfigPathArray(config: TsConfig): [string, string[]][] {
  if (!config.compilerOptions?.paths) {
    return [];
  }

  return Object.entries(config.compilerOptions.paths);
}
