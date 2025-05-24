import _Layout from './src/layout.vue'
import _Header from './src/header.vue'
import _Aside from './src/aside.vue'
import _Main from './src/main.vue'
import _Footer from './src/footer.vue'

import { withInstall } from '@lumen-ui/utils/with-install'

const Layout = withInstall(_Layout)
const Header = withInstall(_Header)
const Aside = withInstall(_Aside)
const Main = withInstall(_Main)
const Footer = withInstall(_Footer)

export { Layout, Header, Aside, Main, Footer }

// 导出类型定义
export type { LayoutProps } from './src/layout'
export type { HeaderProps } from './src/header'
export type { AsideProps } from './src/aside'
export type { MainProps } from './src/main'
export type { FooterProps } from './src/footer'

declare module 'vue' {
    export interface GlobalComponents {
        LmLayout: typeof Layout
        LmHeader: typeof Header
        LmAside: typeof Aside
        LmMain: typeof Main
        LmFooter: typeof Footer
    }
}