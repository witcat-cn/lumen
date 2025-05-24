import type { PropType } from 'vue'

export const checkboxProps = {
    modelValue: { type: Boolean, default: false },
    label: { type: [String, Number] as PropType<string | number>, default: '' },
    disabled: { type: Boolean, default: false },
    indeterminate: { type: Boolean, default: false },
} as const

// 关键修正：使用显式类型，避免 typeof TSTypeQuery
export type CheckboxProps = {
    modelValue: boolean
    label: string | number
    disabled: boolean
    indeterminate: boolean
}

export type CheckboxEmits = {
    (e: 'update:modelValue', value: boolean): void
    (e: 'change', value: boolean): void
}