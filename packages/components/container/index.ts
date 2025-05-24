import _Container from './src/container.vue'
import { withInstall } from '@lumen-ui/utils/with-install'

const Container = withInstall(_Container)

export default Container

export type { ContainerProps } from './src/container'

declare module 'vue' {
    export interface GlobalComponents {
        LmContainer: typeof Container
    }
}
