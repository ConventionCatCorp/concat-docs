// Lints the JSX inside Markdown/MDX content. Prettier handles layout; these rules
// normalise what Prettier leaves alone. Docusaurus compiles .md as MDX, so both
// extensions go through the MDX parser.
import stylistic from '@stylistic/eslint-plugin';
import * as mdx from 'eslint-plugin-mdx';

export default [
  { ignores: ['build/', '.docusaurus/', 'node_modules/', 'static/'] },
  {
    ...mdx.flat,
    // Only docs/ is compiled as MDX; READMEs and docs-style/ are plain Markdown.
    files: ['docs/**/*.{md,mdx}'],
    processor: mdx.createRemarkProcessor({ lintCodeBlocks: false, languageMapper: {} }),
    languageOptions: {
      ...mdx.flat.languageOptions,
      parserOptions: { extensions: ['.md', '.mdx'], markdownExtensions: [] },
    },
    plugins: { ...mdx.flat.plugins, '@stylistic': stylistic },
    rules: {
      // <x></x> -> <x />
      '@stylistic/jsx-self-closing-comp': ['error', { component: true, html: true }],
      // prop={"x"} -> prop="x", {"text"} children -> text
      '@stylistic/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never', propElementValues: 'always' },
      ],
      // prop={true} -> prop
      '@stylistic/jsx-shorthand-boolean': 'error',
      '@stylistic/jsx-equals-spacing': ['error', 'never'],
      '@stylistic/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      '@stylistic/jsx-tag-spacing': [
        'error',
        { beforeSelfClosing: 'always', closingSlash: 'never', beforeClosing: 'never' },
      ],
    },
  },
];
