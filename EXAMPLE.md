# Data Examples



### TS Config

```json
{
  "compilerOptions": {      
		"@src/*": ["./src/*"],
    "@constants/*": ["./src/constants/*"],
    "@utils/*": ["./src/utils/*"],
    "@constants": ["./src/constants/index.ts"],
    "@utils": ["./src/utils/index.ts"],
  }
```



### Babel RC

```json
{
  "presets": [],
  "plugins": [
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "alias": {
          "@src": "./src",
          "@utils": "./src/utils",
          "@constants": "./src/constants",
        }
      }
    ]
  ]
}
```



### Webpack Config

```javascript
const config = {
  resolve: {
    alias: {
      '@src': path.resolve('src'),
      '@constants': path.resolve('src/constants'),
      '@utils': path.resolve('src/utils'),
    },
  },
};
```



### Jest Config 

```javascript
module.exports = {
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@constants': '<rootDir>/src/constants/index.ts',
    '@constants/(.*)': '<rootDir>/src/constants/$1',
    '@utils': '<rootDir>/src/utils/index.ts',
    '@utils/(.*)': '<rootDir>/src/utils/$1',
    '@src/(.*)': '<rootDir>/src/$1',
  },
};
```

