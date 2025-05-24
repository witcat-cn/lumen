import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@lumen-ui/components/icon'
import Button from '@lumen-ui/components/button'
import '@lumen-ui/theme-chalk/src/index.scss'

const plugins = [
    Icon,
    Button,
]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))
app.mount('#app')
