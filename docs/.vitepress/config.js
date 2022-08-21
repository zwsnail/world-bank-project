import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.js'

export default defineConfig({
    lang: 'en-US',
    title: 'VitePress World Bank Project',
    description: 'Just playing around.',
    themeConfig: {
        logo: '/world-map.svg',
        // head: [
        //     ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
        //     // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        //   ],
        nav: [
            { text: 'All Country', link: '/all-country' },
            { text: 'Team', link: '/team' },
            { text: 'Github', link: 'https://github.com/zwsnail' }
        ],
        sidebar,
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Zhang Wei'
        },
        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Edit this page on GitHub'
        // },
        lastUpdated: true,
        markdown: {
            theme: 'material-palenight',
            lineNumbers: true
        },
        outDir: './public',
        // enhanceApp({ app }) {
        //     app.component('AllCountry', AllCountry)
        // }
    }

})