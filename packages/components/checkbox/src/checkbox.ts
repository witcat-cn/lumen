import type { ExtractPropTypes } from 'vue'

export const checkboxProps = {
  modelValue: { type: Boolean, default: false },
  label: { type: [String, Number], default: '' },
  disabled: { type: Boolean, default: false },
  indeterminate: { type: Boolean, default: false },
} as const

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = {
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}

