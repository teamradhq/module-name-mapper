const config = require('./eslint.config');

config.plugins.push('jest');
config.extends.push('plugin:jest/recommended');
config.extends.push('plugin:jest/style')
config.extends.push('plugin:jest/all')

config.rules = {
  ...config.rules,
  'jest/no-hooks': 'off',
  'jest/prefer-spy-on': 'off',
  '@typescript-eslint/no-unused-vars': ['warn', {
    'vars': 'local',
    'args': 'after-used',
    'ignoreRestSiblings': true,
  }],
}

module.exports = config;
