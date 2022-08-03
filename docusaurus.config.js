// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ConCat',
  tagline: 'Manage events. Not spreadsheets.',
  url: 'https://docs.concat.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ConCatLogo.ico',
  organizationName: 'ConventionCatCorp', // Usually your GitHub org/user name.
  projectName: 'concat-docs', // Usually your repo name.
  deploymentBranch: 'deployment',
  trailingSlash: false,

  plugins: [require.resolve('docusaurus-plugin-sass')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ConventionCatCorp/concat-docs/tree/main/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
      }),
    ],
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,500,0,0',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ConCat',
        logo: {
          alt: 'ConCat',
          src: 'img/ConCatLogo.svg',
        },
        items: [
          {
            label: 'Pricing',
            position: 'left',
            to: '/pricing',
          },
          {
            type: 'doc',
            docId: 'guides/intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'doc',
            docId: 'api/intro',
            position: 'left',
            label: 'API Reference',
          },
          {
            href: 'https://github.com/ConventionCatCorp/concat-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Using ConCat',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/guides/intro',
              },
              {
                label: 'Pricing',
                to: '/pricing',
              },
              {
                label: 'API Reference',
                to: '/docs/api/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/ConCatEvents',
              },
            ],
          },
          {
            title: 'Policies',
            items: [
              {
                label: 'Privacy Policy',
                to: '/policy/privacy',
              },
              {
                label: 'Terms of Service',
                to: '/policy/terms',
              },
              {
                label: 'DMCA Takedown Policy',
                to: '/policy/dmca',
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Convention Cat Event Systems, Inc.`,
      },
      prism: {
        additionalLanguages: ['http', 'csp', 'css', 'hpkp', 'hsts', 'javascript', 'json', 'markup', 'uri'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

const branch = process.env.CF_PAGES_BRANCH;
if (branch != null && branch != 'main') {
  config.themeConfig.announcementBar = {
    id: 'prerelease-banner',
    content:
      '<span class="material-symbols-outlined">construction</span> This is a preview version of the ConCat documentation. Information may be incomplete or inaccurate. Please report any issues on <a href="https://github.com/ConventionCatCorp/concat-docs/">GitHub</a>. <small>(Branch: ' + branch + ')</small>',
    backgroundColor: '#ac1b1b',
    textColor: '#091E42',
    isCloseable: false,
  };
}

module.exports = config;
