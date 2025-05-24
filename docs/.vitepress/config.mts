import { defineConfig } from 'vitepress'
import { head } from './head'
import { docsConfig } from './docs'
import { themeConfig } from './theme'
import { enConfig } from './config/en'
import { zhConfig } from './config/zh'
import { resolve } from 'path'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'

const alias = {
    '@': resolve(__dirname, '../../examples')
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    ...docsConfig,
    head,
    themeConfig,
    markdown: {
        config(md) {
            md.use(componentPreview, {alias})
            md.use(containerPreview, {alias})
        },
    },
    vite: {
        resolve: {
            alias
        }
    },
    locales: {
        root: {label: 'English', lang: 'en-US', link: '/en', ...enConfig},
        zh: {label: '简体中文', lang: 'zh-CN', link: '/zh', ...zhConfig}
    }
})
