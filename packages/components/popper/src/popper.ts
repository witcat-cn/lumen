import { ref, shallowRef, watch, onUnmounted, nextTick, computed, type Ref } from 'vue'
import { createPopper, Instance as PopperInstance, type Placement, type Modifier } from '@popperjs/core'

export interface PopperProps {
    readonly text: string
    readonly popper: string
    readonly placement?: Placement
    readonly offset?: readonly [number, number]
}

interface PopperRefs {
    readonly showPopper: Ref<boolean>
    readonly rootRef: Ref<HTMLElement | null>
    readonly popperRef: Ref<HTMLElement | null>
    readonly triggerRef: Ref<HTMLElement | null>
    readonly arrowRef: Ref<HTMLElement | null>
    readonly formattedContent: Ref<string>
    readonly togglePopper: () => Promise<void>
}

const isHTMLElement = (el: unknown): el is HTMLElement => el instanceof HTMLElement

const POPPER_CONFIG = {
    ARROW_PADDING: 5,
    VIEWPORT_PADDING: 8,
    FALLBACK_PLACEMENTS: ['top', 'right', 'left', 'bottom'] as const,
} as const

export const usePopper = (props: PopperProps): PopperRefs => {
    const showPopper = ref(false)
    const rootRef = shallowRef<HTMLElement | null>(null)
    const popperRef = shallowRef<HTMLElement | null>(null)
    const triggerRef = shallowRef<HTMLElement | null>(null)
    const arrowRef = shallowRef<HTMLElement | null>(null)

    let popperInstance: PopperInstance | null = null
    let clickHandler: ((e: MouseEvent) => void) | null = null
    let isDestroyed = false

    const formattedContent = computed(() =>
        props.popper.replace(/`([^`]+)`/g, '<code>$1</code>'),
    )

    const getModifiers = (): Partial<Modifier<string, any>>[] => [
        {
            name: 'offset',
            options: {offset: props.offset},
        },
        {
            name: 'arrow',
            options: {
                element: arrowRef.value,
                padding: POPPER_CONFIG.ARROW_PADDING,
            },
        },
        {
            name: 'computeStyles',
            options: {gpuAcceleration: false},
        },
        {
            name: 'preventOverflow',
            options: {
                boundary: 'viewport',
                padding: POPPER_CONFIG.VIEWPORT_PADDING,
            },
        },
        {
            name: 'flip',
            options: {fallbackPlacements: [...POPPER_CONFIG.FALLBACK_PLACEMENTS]},
        },
    ]

    const getTriggerEl = () => {
        const el = (triggerRef.value as any)?.$el ?? triggerRef.value
        return isHTMLElement(el) ? el : null
    }

    const initPopper = async (): Promise<boolean> => {
        if (isDestroyed) return false

        const popperEl = popperRef.value
        const triggerEl = getTriggerEl()

        if (!popperEl || !triggerEl) return false

        try {
            const options = {
                placement: props.placement,
                modifiers: getModifiers(),
            }

            if (popperInstance) {
                await popperInstance.setOptions(options)
                await popperInstance.update()
            } else {
                popperInstance = createPopper(triggerEl, popperEl, options)
            }
            return true
        } catch {
            return false
        }
    }

    const destroyPopper = () => {
        popperInstance?.destroy()
        popperInstance = null
    }

    const togglePopper = async () => {
        if (isDestroyed) return

        showPopper.value = !showPopper.value

        if (showPopper.value) {
            await nextTick()
            const success = await initPopper()
            if (!success) showPopper.value = false
        }
    }

    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Node
        if (target && !rootRef.value?.contains(target)) {
            showPopper.value = false
        }
    }

    const addClickListener = async () => {
        if (clickHandler || isDestroyed) return
        clickHandler = handleClickOutside
        await nextTick()
        if (clickHandler && !isDestroyed) {
            document.addEventListener('click', clickHandler, {passive: true})
        }
    }

    const removeClickListener = () => {
        if (clickHandler) {
            document.removeEventListener('click', clickHandler)
            clickHandler = null
        }
    }

    // 监听器
    const stopWatchers = [
        watch(showPopper, (show) => {
            show ? addClickListener() : removeClickListener()
        }),

        watch(
            () => [props.placement, props.offset] as const,
            async () => {
                if (showPopper.value && popperInstance && !isDestroyed) {
                    await nextTick()
                    try {
                        await popperInstance.setOptions({
                            placement: props.placement,
                            modifiers: getModifiers(),
                        })
                        await popperInstance.update()
                    } catch {
                        showPopper.value = false
                    }
                }
            },
            {deep: true},
        ),
    ]

    onUnmounted(() => {
        isDestroyed = true
        stopWatchers.forEach(stop => stop())
        removeClickListener()
        destroyPopper()
    })

    return {
        showPopper, rootRef, popperRef, triggerRef, arrowRef, formattedContent, togglePopper
    } as const
}