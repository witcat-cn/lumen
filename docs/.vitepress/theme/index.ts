import type { Theme } from 'vitepress'
import DefineTheme from 'vitepress/theme'
import LmButton from '@lumen-ui/components/button'
import LmIcon from '@lumen-ui/components/icon'
import '@lumen-ui/theme-chalk/src/index.scss'
import './index.scss'
import { AntDesignContainer, ElementPlusContainer, NaiveUIContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

import LmPopper from '@lumen-ui/components/popper'


export default {
    ...DefineTheme,
    enhanceApp({app}) {
        app.use(LmIcon).use(LmButton).use(LmPopper)
        app.component('demo-preview', ElementPlusContainer)
        // app.component('popper', Popper)
    },

}satisfies Theme