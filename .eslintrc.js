module.exports = {
  root: true,
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    '@react-native-community',
  ],
  parser: 'babel-eslint',
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
          'warn',
          {
            extensions: ['.jsx', '.js'],
          },
        ],
        'import/prefer-default-export': 'off',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off',
      },
    },
  ],
};
