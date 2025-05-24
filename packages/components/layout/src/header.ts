import { ExtractPropTypes } from 'vue'

export const headerProps = {
    height: {
        type: String,
        default: undefined,
    },
} as const

export type HeaderProps = ExtractPropTypes<typeof headerProps>