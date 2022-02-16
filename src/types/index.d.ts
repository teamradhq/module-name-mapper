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

type JestModuleNameMapperEntry = [
  string,
  string | string[],
];

type JestModuleNameMapper = {
  [key: string]: string | string[],
};


