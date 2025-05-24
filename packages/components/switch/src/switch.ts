import type { ExtractPropTypes } from 'vue'

export const switchProps = {
  modelValue: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  activeText: { type: String, default: '' },
  inactiveText: { type: String, default: '' },
  size: { type: String, default: '' }, // '', 'small'
} as const

export type SwitchProps = ExtractPropTypes<typeof switchProps>
export type SwitchEmits = {
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}

