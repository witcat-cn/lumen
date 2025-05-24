import { defineConfig } from 'vitepress'
import { head } from './head'
import { docsConfig } from './docs'
import { themeConfig } from './theme'
import { enConfig } from './config/en'
import { zhConfig } from './config/zh'
import { resolve } from 'path'
import { vitepressDemoPlugin } from 'vitepress-demo-plugin'


// https://vitepress.dev/reference/site-config
export default defineConfig({
    ...docsConfig,
    head,
    themeConfig,
    markdown: {
        config(md) {
            md.use(vitepressDemoPlugin, {
                demoDir: resolve(__dirname, '../examples'),
                lightTheme: 'github-light',
                darkTheme: 'github-dark',
            });
        },
    },
    vite: {
        resolve: {
            alias: [
                { find: /^@lumen-ui\/components\/(.*)$/, replacement: resolve(__dirname, '../../packages/components/$1') },
                { find: /^@lumen-ui\/components$/, replacement: resolve(__dirname, '../../packages/components') },
                { find: /^@lumen-ui\/theme-chalk(.*)$/, replacement: resolve(__dirname, '../../packages/theme-chalk$1') },
            ],
        },
        css: {
            preprocessorOptions: {
                scss: {
                    // Use Sass modern JS API to avoid legacy deprecation warnings
                    api: 'modern',
                },
                sass: {
                    api: 'modern',
                },
            },
        },
    },
    locales: {
        root: {label: 'English', lang: 'en-US', link: '/', ...enConfig},
        zh: {label: '简体中文', lang: 'zh-CN', link: '/zh', ...zhConfig},
    },
})
