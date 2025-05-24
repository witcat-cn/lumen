import { PropType, ExtractPropTypes } from 'vue'

export type LayoutDirection = 'horizontal' | 'vertical'

export const layoutProps = {
    direction: {
        type: String as PropType<LayoutDirection>,
        default: 'horizontal',
        validator: (v: any) => ['horizontal', 'vertical'].includes(v),
    },
} as const

export type LayoutProps = ExtractPropTypes<typeof layoutProps>