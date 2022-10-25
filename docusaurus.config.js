// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AthenaServingFrameWork Doc',
  tagline: 'An Opensource AI model serving framework with high performance, flexible loading mechanism...',
  url: 'https://gaodayu168.github.io',
  baseUrl: '/datasophon-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/brand.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gaodayu168', // Usually your GitHub org/user name.
  projectName: 'datasophon-website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['en', "zh-Hans"],

  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          versions: {
            current: {
            label: '最新版本(unreleased)',
            path: 'current',
            },
            "2.2.0": {
              label: 'release-2.2.0',
              path: '2.2.0',
              },
            "2.1.0": {
              label: 'release-2.1.0',
              path: '2.1.0',
              },
          },
          path: "docs",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/iflytek/athena_website/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          blogSidebarTitle: '全部博文',
          blogSidebarCount: 'ALL',
          editUrl:
            'https://github.com/iflytek/athena_website/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'AthenaServingFramework Doc',
        logo: {
          alt: 'AthenaServingFramework Logo',
          src: 'img/brand.png',
        },
        items: [
          {
            type: 'doc',
            docId: '概览',
            position: 'left',
            label: 'Docs',
            activeBasePath: "docs/current"
          },

          {
            type: 'localeDropdown',
            position: 'right',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://github.com/gaodayu168/datasophon/',
                label: 'Help Us Translate',
              },
            ],
          },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
          dropdownActiveClassDisabled: true,
        },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/iflytek/aiges',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/current/概览',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/athenaserving',
              },
              {
                label: 'Github Discussion',
                href: 'https://github.com/xfyun/proposals/discussions',
              },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/iflytek/aiges/issues',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
