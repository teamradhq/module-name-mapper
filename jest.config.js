module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'html',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/public',
  ],
  testMatch: [
    '**/src/**/*.test.ts?(x)',
  ],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    '^@src/(.*)': '<rootDir>/src/$1',
    '^@components/(.*)': '<rootDir>/src/components/$1',
    '^@CONSTANTS': '<rootDir>/src/CONSTANTS.ts',
    '^.+\\.(sass|css)$': '<rootDir>/src/__mocks__/cssStub.js',
    '^@src/dictionary.json': '<rootDir>/src/__mocks__/dictionary.json',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
};
