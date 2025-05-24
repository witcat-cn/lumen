import type { ExtractPropTypes } from 'vue'

export const checkboxGroupProps = {
  modelValue: { type: Array as () => any[], default: () => [] },
  disabled: { type: Boolean, default: false },
} as const

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = {
  (e: 'update:modelValue', value: any[]): void
  (e: 'change', value: any[]): void
}

