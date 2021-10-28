module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript/base',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    'jest/globals': true,
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          ['sibling', 'index'],
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'eslint-comments/no-unlimited-disable': 'off',
    'no-nested-ternary': 'off',
    'no-console': 'error',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
        ignorePropertyModificationsForRegex: ['.*Ref$'],
      },
    ],
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react-native/no-inline-styles': 'error',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {allowTaggedTemplates: true},
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {accessibility: 'no-public'},
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
    'no-void': 'off',
    '@typescript-eslint/object-curly-spacing': ['off'],
    'import/extensions': ['off'],
  },
};
