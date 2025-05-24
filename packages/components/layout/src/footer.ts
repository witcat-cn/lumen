import type { ExtractPropTypes } from 'vue'

export const footerProps = {
    height: {
        type: String,
        default: undefined
    }
} as const

export type FooterProps = ExtractPropTypes<typeof footerProps>