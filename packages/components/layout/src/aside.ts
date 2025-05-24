import type { ExtractPropTypes } from 'vue'

export const asideProps = {
    width: {
        type: String,
        default: undefined,
    },
} as const

export type AsideProps = ExtractPropTypes<typeof asideProps>