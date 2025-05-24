import type { PropType, ExtractPropTypes } from 'vue'

export const iconProps = {
    size: [Number, String] as PropType<number | string>,
    color: String
}

export interface IconProps {
    size?: number | string
    color?: string
}

export type _IconProps = ExtractPropTypes<typeof iconProps>