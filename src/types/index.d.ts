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

type JestModuleEntry = [
  string,
  string | string[],
];

