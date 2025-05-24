import type {DefaultTheme} from 'vitepress'

export const themeConfig: DefaultTheme.Config = {
    logo: './logo.png',
    i18nRouting: false,
    search: {
        provider: 'local',
        options: {
            locales: {
                zh: {
                    translations: {
                        button: {
                            buttonText: '搜索',
                            buttonAriaLabel: '搜索文档',
                        },
                        modal: {
                            noResultsText: '未找到相关内容',
                            resetButtonTitle: '清除查询内容',
                            footer: {
                                selectText: '选择',
                                navigateText: '切换',
                                closeText: '关闭'
                            }
                        }
                    }
                },
                en: {
                    translations: {
                        button: {
                            buttonText: 'Search',
                            buttonAriaLabel: 'Search docs'
                        },
                        modal: {
                            noResultsText: 'No results found',
                            resetButtonTitle: 'Reset search',
                            footer: {
                                selectText: 'Select',
                                navigateText: 'Navigate'
                            }
                        }
                    }
                }
            }
        }
    }
}