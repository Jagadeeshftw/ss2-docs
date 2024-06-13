// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Scaffold-Stark 2 | Docs",
  tagline: "Open-source toolkit for building dapps",
  favicon: "img/icon-starknet.svg",

  // Set the production url of your site here
  url: "https://scaffold-eth-2-docs.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "scaffold-stark",
  projectName: "scaffold-Stark-2",

  scripts: [
    {
      src: "https://plausible.io/js/plausible.js",
      async: true,
      defer: true,
      "data-domain": "docs.scaffoldstark.io",
    },
  ],

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // sidebarCollapsible: false,
          sidebarCollapsed: true,
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Quantum3-Labs/ss2-docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: "img/icon-starknet.svg",
      navbar: {
        title: "Scaffold-Stark 2 | Docs",
        logo: {
          alt: "scaffold-stark-logo",
          src: "img/logo-starknet.svg",
        },
        items: [
          // commented until Scaffold-eth 2 website is launched
          // {
          //   href: 'https://scaffoldeth.io/',
          //   label: 'SE-2 Website',
          //   position: 'left',
          // },
          {
            href: "https://github.com/Quantum3-Labs/ss2-docs",
            label: "GitHub Docs",
            position: "right",
          },
          {
            href: "https://github.com/Quantum3-Labs/scaffold-stark-2",
            label: "GitHub SS-2",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Built with ♥ at BuidlGuidl",
            items: [
              {
                label: "BuidlGuidl Website",
                to: "https://buidlguidl.com/",
              },
              {
                label: "BuidlGuidl Twitter",
                to: "https://twitter.com/buidlguidl",
              },
            ],
          },
          {
            title: "GitHub",
            items: [
              {
                label: "Scaffold-Stark 2 GitHub",
                href: "https://github.com/Quantum3-Labs/scaffold-stark-2",
              },
              {
                label: "Docs GitHub",
                href: "https://github.com/Quantum3-Labs/ss2-docs",
              },
            ],
          },
          {
            title: "Social",
            items: [
              {
                label: "Twitter",
                href: "https://x.com/ScaffoldStark",
              },
              {
                label: "Telegram",
                href: "https://t.me/+wO3PtlRAreo4MDI9",
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Scaffold-stark Docs. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
