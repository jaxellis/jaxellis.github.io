import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  eslint.configs.recommended,

  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  prettierConfig,

  {
    rules: {
      semi: ['error', 'always'],
    },
  },
];

export default eslintConfig;
