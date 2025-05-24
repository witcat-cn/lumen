import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { getNavbar } from '../navs/zh'
import { sidebar } from '../sidebars/zh'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        lastUpdated: {
            text: '最后更新',
        },
        returnToTopLabel: '返回顶部',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        logo: './logo.png',
        nav: getNavbar(),
        sidebar,
        outline: {
            level: 'deep',
            label: '目录'
        }
    }
}
