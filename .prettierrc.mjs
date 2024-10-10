// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  quoteProps: 'consistent',
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
};
