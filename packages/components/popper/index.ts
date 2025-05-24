import _Popper from './src/popper.vue'
import { withInstall } from '@lumen-ui/utils/with-install'

const Popper = withInstall(_Popper)

export default Popper

export type { PopperProps } from './src/popper.vue'

declare module 'vue' {
    export interface GlobalComponents {
        LmPopper: typeof Popper
    }
}