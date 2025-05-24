import type { ExtractPropTypes, PropType } from 'vue'

export type Direction = 'horizontal' | 'vertical'

export const containerProps = {
    direction: {
        type: String as PropType<Direction>,
        default: 'vertical',
    },
    padding: {
        type: [String, Number],
        default: '1rem',
    },
    background: {
        type: String,
        default: 'transparent',
    },
} as const

export type ContainerProps = ExtractPropTypes<typeof containerProps>