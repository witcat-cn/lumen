import _Checkbox from './src/checkbox.vue'
import _CheckboxGroup from './src/group.vue'
import { withInstall } from '@lumen-ui/utils/with-install'

export * from './src/checkbox'
export * from './src/group'

const Checkbox = withInstall(_Checkbox)
const CheckboxGroup = withInstall(_CheckboxGroup)

export { Checkbox, CheckboxGroup }
export default Checkbox

declare module 'vue' {
  export interface GlobalComponents {
    LmCheckbox: typeof Checkbox
    LmCheckboxGroup: typeof CheckboxGroup
  }
}

