import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@lumen-ui/components/icon'
import Button from '@lumen-ui/components/button'
import Container from '@lumen-ui/components/container'
import { Layout, Header, Aside, Main, Footer } from '@lumen-ui/components/layout'
import './style.scss'

import '@lumen-ui/theme-chalk/src/index.scss'

const plugins = [
    Icon,
    Button,
    Container,
    Layout,
    Header,
    Aside,
    Main,
    Footer,
]
const app = createApp(App)

plugins.forEach(plugin => app.use(plugin))
app.mount('#app')
