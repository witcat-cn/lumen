import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import { getNavbar } from '../navs/en'
import { sidebar } from '../sidebars/en'

export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
        darkModeSwitchLabel: 'Theme',
        lastUpdated: {
            text: 'LastUpdated',
        },
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Back to top',
        docFooter: {
            prev: 'Previous page',
            next: 'Next page'
        },
        logo: '/logo.png',
        nav: getNavbar(),
        sidebar,
        outline: {
            level: 'deep',
            label: 'List'
        }
    }
}
