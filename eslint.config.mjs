import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginVitest from '@vitest/eslint-plugin';
import pluginStorybook from 'eslint-plugin-storybook';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['*.{spec,test}.{js,jsx,ts,tsx}'],
    plugins: {
      pluginVitest,
    },
    rules: {
      ...pluginVitest.configs.recommended.rules, // you can also use vitest.configs.all.rules to enable all rules
      'vitest/consistent-test-filename': 'error',
      'vitest/consistent-test-it': ['error', { fn: 'test' }],
      'vitest/no-conditional-expect': 'error',
      'vitest/no-conditional-in-test': 'error',
      'vitest/no-conditional-tests': 'error',
      'vitest/no-disabled-tests': 'warn',
      'vitest/no-duplicate-hooks': 'error',
      'vitest/no-focused-tests': 'warn',
      'vitest/no-standalone-expect': 'error',
      'vitest/no-test-prefixes': 'error',
      'vitest/no-test-return-statement': 'error',
      'vitest/padding-around-after-all-blocks': 'error',
      'vitest/padding-around-after-each-blocks': 'error',
      'vitest/padding-around-all': 'error',
      'vitest/padding-around-before-all-blocks': 'error',
      'vitest/padding-around-before-each-blocks': 'error',
      'vitest/padding-around-describe-blocks': 'error',
      'vitest/padding-around-expect-groups': 'error',
      'vitest/padding-around-test-blocks': 'error',
      'vitest/prefer-called-with': 'error',
      'vitest/prefer-comparison-matcher': 'error',
      'vitest/prefer-each': 'error',
      'vitest/prefer-equality-matcher': 'error',
      'vitest/prefer-expect-assertions': 'error',
      'vitest/prefer-expect-resolves': 'error',
      'vitest/prefer-hooks-in-order': 'error',
      'vitest/prefer-hooks-on-top': 'error',
      'vitest/prefer-lowercase-title': 'error',
      'vitest/prefer-mock-promise-shorthand': 'error',
      'vitest/prefer-snapshot-hint': 'error',
      'vitest/prefer-spy-on': 'error',
      'vitest/prefer-strict-equal': 'error',
      'vitest/prefer-to-be-object': 'error',
      'vitest/prefer-to-be': 'error',
      'vitest/prefer-to-contain': 'error',
      'vitest/prefer-to-have-length': 'error',
      'vitest/prefer-todo': 'error',
      'vitest/prefer-vi-mocked': 'error',
      'vitest/require-hook': 'error',
      'vitest/valid-describe-callback': 'error',
      'vitest/valid-expect-in-promise': 'error',
      'vitest/valid-expect': 'error',
    },
  },
  ...pluginStorybook.configs['flat/recommended'],
];

export default eslintConfig;
