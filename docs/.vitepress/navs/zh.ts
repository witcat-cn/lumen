import type { DefaultTheme } from 'vitepress'

export const getNavbar = (): DefaultTheme.NavItem[] => [
    {
        text: '主页',
        link: '/zh/index',
    },
    {
        text: '组件',
        link: '/zh/components'
    }
]