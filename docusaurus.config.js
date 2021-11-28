const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    title: 'Sergey Gromkov',
    tagline: 'Frontend developer',
    url: 'https://gromkov.me',
    baseUrl: '/',
    organizationName: 'sgromkov',
    projectName: 'gromkov.me',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    trailingSlash: true,
    plugins: ['docusaurus-plugin-yandex-metrica'],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                },
                blog: {
                    showReadingTime: true,
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
            gtag: {
                trackingID: 'G-QKETXF1NLY',
            },
            ym: {
                counterID: '86645179',
            },
            navbar: {
                title: 'Sergey Gromkov',
                logo: {
                    alt: 'Sergey',
                    src: 'img/logo.jpg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'index',
                        position: 'left',
                        label: 'Me',
                    },
                    {
                        to: '/blog',
                        label: 'Blog',
                        position: 'left'
                    },
                    {
                        href: 'https://github.com/sgromkov/gromkov.me',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
});
