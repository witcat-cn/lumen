import type { Theme } from 'vitepress'
import DefineTheme from 'vitepress/theme'
import LmButton from '@lumen-ui/components/button'
import LmIcon from '@lumen-ui/components/icon'
import LmContainer from '@lumen-ui/components/container'
import LmPopper from '@lumen-ui/components/popper'
import { Layout, Header, Aside, Main, Footer } from '@lumen-ui/components/layout'
import LmPagination from '@lumen-ui/components/pagination'
import LmSwitch from '@lumen-ui/components/switch'
import { Checkbox, CheckboxGroup } from '@lumen-ui/components/checkbox'

import '@lumen-ui/theme-chalk/src/index.scss'

import './index.scss'


export default {
    ...DefineTheme,
    enhanceApp({app}) {
        app.use(LmIcon)
            .use(LmButton)
            .use(LmPopper)
            .use(LmContainer)
            .use(Layout)
            .use(Header)
            .use(Aside)
            .use(Main)
            .use(Footer)
                .use(LmSwitch)
                .use(LmPagination)
                .use(Checkbox)
                .use(CheckboxGroup)
    },

}satisfies Theme