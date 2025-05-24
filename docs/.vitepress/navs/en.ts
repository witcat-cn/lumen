import type { DefaultTheme } from 'vitepress'

export const getNavbar = (): DefaultTheme.NavItem[] => [
    {
        text: 'Home',
        link: '/'
    },
    {
        text: 'Components',
        link: '/components'
    }
]