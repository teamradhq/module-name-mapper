type TsConfigPathObject = {
  [key: string]: string[],
}

type TsConfigPathEntry = [
  string,
  string[],
];

type TsConfig = {
  compilerOptions: {
    paths?: TsConfigPathObject,
  },
};

type BaseConfigEntry = [
  string,
  string | string[],
];

type BaseConfigObject = {
  [key: string]: string | string[],
};

type JestModuleNameMapperEntry = BaseConfigEntry;

type JestConfigModuleNameMapper = BaseConfigObject;

type WebpackResolveAliasEntry = BaseConfigEntry;

type WebpackConfigResolveAlias = BaseConfigObject;

interface IConfigParser<ConfigType> {
  readonly config: ConfigType
}


type KeyValueMapper = (value: string) => string;
