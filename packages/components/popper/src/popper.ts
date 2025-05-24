import { ref, watch, onUnmounted, onMounted, nextTick, computed, CSSProperties } from 'vue'
import { createPopper, Instance as PopperInstance } from '@popperjs/core'

interface PopperProps {
    text: string;
    popper: string;
    placement: 'top' | 'bottom' | 'left' | 'right';
    offset: [number, number];
}

export function usePopper(props: PopperProps) {
    const showPopper = ref(false)
    const rootRef = ref<HTMLElement | null>(null)
    const popperRef = ref<HTMLElement | null>(null)
    const triggerRef = ref<HTMLElement | null>(null)
    const arrowRef = ref<HTMLElement | null>(null)

    let popperInstance: PopperInstance | null = null

    const formattedContent = computed(() => {
        return props.popper.replace(/`([^`]+)`/g, '<code>$1</code>')
    })


    const initializePopper = (): void => {
        if (!popperRef.value || !triggerRef.value) return

        if (!popperInstance) {
            popperInstance = createPopper(triggerRef.value, popperRef.value, {
                placement: props.placement,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: props.offset,
                        },
                    },
                    {
                        name: 'arrow',
                        options: {
                            element: arrowRef.value,
                            padding: 5,
                        },
                    },
                    {
                        name: 'computeStyles',
                        options: {
                            gpuAcceleration: false, // 禁用 GPU 加速，有时可以避免一些渲染问题
                        },
                    },
                    {
                        name: 'preventOverflow', // 防止溢出
                        options: {
                            boundary: 'viewport', // 边界设置为视口
                            padding: 8, // 距离视口边缘的最小距离
                        },
                    },
                    {
                        name: 'flip', // 自动翻转位置
                        options: {
                            fallbackPlacements: ['top', 'right', 'left', 'bottom'], // 翻转时的备选位置
                        },
                    },
                ],
            })
        } else {
            // 如果实例已存在，更新配置并强制更新位置
            popperInstance.setOptions({
                placement: props.placement,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: props.offset,
                        },
                    },
                    {
                        name: 'arrow',
                        options: {
                            element: arrowRef.value,
                            padding: 5,
                        },
                    },
                    {
                        name: 'computeStyles',
                        options: {
                            gpuAcceleration: false,
                        },
                    },
                    {
                        name: 'preventOverflow',
                        options: {
                            boundary: 'viewport',
                            padding: 8,
                        },
                    },
                    {
                        name: 'flip',
                        options: {
                            fallbackPlacements: ['top', 'right', 'left', 'bottom'],
                        },
                    },
                ],
            })
            popperInstance.update()
        }
    }

    const destroyPopper = (): void => {
        if (popperInstance) {
            popperInstance.destroy()
            popperInstance = null
        }
    }

    const togglePopper = async (): Promise<void> => {
        showPopper.value = !showPopper.value
        console.log('showPopper toggled:', showPopper.value)

        if (showPopper.value) {
            await nextTick()
            initializePopper()
        }
    }

    const handleClickOutside = (event: MouseEvent): void => {
        if (rootRef.value && !rootRef.value.contains(event.target as Node)) {
            showPopper.value = false
        }
    }

    watch(showPopper, (newValue) => {
        if (newValue) {
            setTimeout(() => {
                document.addEventListener('click', handleClickOutside)
            }, 0)
        } else {
            document.removeEventListener('click', handleClickOutside)
        }
    })

    watch(() => [props.placement, props.offset], () => {
        if (showPopper.value && popperInstance) {
            nextTick(() => {
                popperInstance?.setOptions({
                    placement: props.placement,
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: props.offset,
                            },
                        },
                        {
                            name: 'arrow',
                            options: {
                                element: arrowRef.value,
                                padding: 5,
                            },
                        },
                        {
                            name: 'computeStyles',
                            options: {
                                gpuAcceleration: false,
                            },
                        },
                        {
                            name: 'preventOverflow',
                            options: {
                                boundary: 'viewport',
                                padding: 8,
                            },
                        },
                        {
                            name: 'flip',
                            options: {
                                fallbackPlacements: ['top', 'right', 'left', 'bottom'],
                            },
                        },
                    ],
                })
                popperInstance?.update()
            })
        }
    })

    onMounted(() => {
        // 组件挂载后不立即创建 popper 实例，等到显示时再创建
        // 或者，如果希望在挂载后立即创建但不显示，可以在这里调用 initializePopper()
        // 但为了避免不必要的性能开销，延迟创建是更好的选择。
    })

    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
        // 组件卸载时销毁 Popper 实例
        destroyPopper()
    })

    return {
        showPopper,
        rootRef,
        popperRef,
        triggerRef,
        arrowRef,
        formattedContent,
        togglePopper
    }
}