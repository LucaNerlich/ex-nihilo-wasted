// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Mindestens 10 Zeichen',
    tagline: 'M10Z',
    favicon: 'img/M10Z_Orange_Favicon-01.ico',

    // Set the production url of your site here
    url: 'https://m10z.de',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'LucaNerlich', // Usually your GitHub org/user name.
    projectName: 'm10z', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'de',
        locales: ['en', 'de'],
    },

    plugins: [
        'docusaurus-plugin-sass',
        ['@docusaurus/plugin-ideal-image',
            {
                quality: 80,
                max: 1080, // max resized image's size.
                min: 540, // min resized image's size. if original is lower, use that size.
                steps: 4, // the max number of images generated between min and max (inclusive)
                disableInDev: false,
            },
        ],
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                theme: {
                    customCss: require.resolve('./src/styles/theme.css'),
                },
                docs: false,
                blog: {
                    routeBasePath: '/',
                    showReadingTime: true,
                    blogSidebarTitle: 'Jüngste Beiträge',
                    blogSidebarCount: 10,
                    feedOptions: {
                        type: 'rss',
                        copyright: `Copyright © ${new Date().getFullYear()} Mindestens Zehn Zeichen`,
                        createFeedItems: async (params) => {
                            const {blogPosts, defaultCreateFeedItems, ...rest} = params
                            return defaultCreateFeedItems({
                                blogPosts: blogPosts.filter((item, index) => index < 10),
                                ...rest,
                            })
                        },
                    },
                },
                pages: {
                    path: 'src/pages',
                    routeBasePath: '/content',
                    include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
                    exclude: [
                        '**/_*.{js,jsx,ts,tsx,md,mdx}',
                        '**/_*/**',
                        '**/*.test.{js,jsx,ts,tsx}',
                        '**/__tests__/**',
                    ],
                    mdxPageComponent: '@theme/MDXPage',
                    remarkPlugins: [],
                    rehypePlugins: [],
                    beforeDefaultRemarkPlugins: [],
                    beforeDefaultRehypePlugins: [],
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/M10Z_Orange.png',
            docs: {
                sidebar: {
                    hideable: true,
                },
            },
            colorMode: {
                defaultMode: 'dark',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },
            navbar: {
                hideOnScroll: true,
                title: 'Mindestens 10 Zeichen',
                logo: {
                    alt: 'M10Z Logo',
                    src: 'img/M10Z_Orange.svg',
                },
                items: [
                    {
                        to: 'tags',
                        label: 'Kategorien',
                    },
                    {
                        to: '/tags/podcast',
                        label: 'Podcasts',
                    },
                    {
                        to: '/tags/artikel',
                        label: 'Artikel',
                    },
                    {
                        to: '/content/hello',
                        label: 'Wer wir sind',
                    },
                    {
                        href: 'https://community.wasted.de/c/m10z/11',
                        label: 'Forum',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Rechtliches',
                        items: [
                            {
                                label: 'Impressum',
                                href: '/content/imprint',
                            },
                            {
                                label: 'Datenschutz',
                                href: '/content/privacy',
                            },
                        ],
                    },
                    {
                        title: 'Feeds',
                        items: [
                            {
                                href: '/audiofeed.xml',
                                target: '_blank',
                                download: true,
                                position: 'left',
                                label: '🔊Audio-Feed',
                            },
                            {
                                href: 'https://m10z.de/audiofeed.xml',
                                clipboard: true,
                                label: '📎Copy Audio-Feed',
                            },
                            {
                                href: '/rss.xml',
                                target: '_blank',
                                download: true,
                                position: 'left',
                                label: '📖Artikel-Feed',
                            },
                            {
                                href: 'https://m10z.de/rss.xml',
                                clipboard: true,
                                label: '📎Copy Artikel-Feed',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                              label: 'AutorInnen',
                              href: '/content/authors'
                            },
                            {
                                label: 'Twitch',
                                href: 'https://www.twitch.tv/m10z_tv',
                            },
                            {
                                label: 'YouTube',
                                href: 'https://www.youtube.com/@M10Z_TV',
                            },
                        ],
                    },
                ],
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
}

module.exports = config
