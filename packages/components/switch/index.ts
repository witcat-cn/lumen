import _Switch from './src/switch.vue'
import { withInstall } from '@lumen-ui/utils/with-install'

export * from './src/switch'

const LmSwitch = withInstall(_Switch)
export default LmSwitch

declare module 'vue' {
  export interface GlobalComponents {
    LmSwitch: typeof LmSwitch
  }
}

