import type {Component, ExtractPropTypes, PropType} from 'vue'

export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'small' | 'medium' | 'large'
export type NativeType = 'button' | 'submit' | 'reset'
export type Placement = 'left' | 'right'

export const buttonProps = {
    type: {
        type: String as PropType<ButtonType>,
        default: undefined,
        validator: (v: any) => ['primary', 'success', 'warning', 'danger', 'info'].includes(v)
    },
    size: {
        type: String as PropType<ButtonSize>,
        default: 'medium',
        validator: (v: any) => ['small', 'medium', 'large'].includes(v)
    },
    round: Boolean,
    plain: Boolean,
    circle: Boolean,
    icon: {
        // accept string, SFC object, or functional component
        type: [String, Object, Function] as PropType<string | Component>,
        default: undefined
    },
    loading: Boolean,
    loadingIcon: {
        type: [String, Object, Function] as PropType<string | Component>,
        default: undefined
    },
    disabled: Boolean,
    nativeType: {
        type: String as PropType<NativeType>,
        default: 'button'
    },
    iconPosition: {
        type: String as PropType<Placement>,
        default: 'left'
    }
} as const

export const buttonEmits = {
    click: (event: MouseEvent) => event instanceof MouseEvent,
    mousedown: (event: MouseEvent) => event instanceof MouseEvent,
}

export interface ButtonProps {
    type?: ButtonType
    size?: ButtonSize
    round?: boolean
    plain?: boolean
    circle?: boolean
    icon?: string | Component
    loading?: boolean
    loadingIcon?: string | Component
    disabled?: boolean
    nativeType?: NativeType
    iconPosition?: Placement
}
export type ButtonEmits = typeof buttonEmits;