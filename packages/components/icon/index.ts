import _Icon from './src/icon.vue'
import { withInstall } from '@lumen-ui/utils/with-install'

export * from './src/icon'

const Icon = withInstall(_Icon)
export default Icon

declare module 'vue' {
    export interface GlobalComponents {
        LmIcon: typeof Icon
    }
}