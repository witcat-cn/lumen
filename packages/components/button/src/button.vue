<script setup lang="ts">
import { createNamespace } from '@lumen-ui/utils/create'
import type { ButtonType, ButtonSize, NativeType } from './button'
import Loading from '@lumen-ui/components/internal-icon/Loading.vue'
import { computed, useSlots, markRaw } from 'vue'

const bem = createNamespace('button')

defineOptions({name: 'lm-button'})


// 判断是否需要显示图标
const showIcon = computed(() => {
  // 使用双重否定确保返回布尔值
  return !!(props.loading || slots.icon || props.icon)
})

// 使用TypeScript泛型标注props类型
const props = defineProps<{
  type?: ButtonType
  size?: ButtonSize
  round?: boolean
  plain?: boolean
  circle?: boolean
  icon?: string | object | Function
  loading?: boolean
  disabled?: boolean
  nativeType?: NativeType
  iconPosition?: 'left' | 'right',
  loadingIcon?: string | object | Function
}>()

// 统一计算图标大小，适用于loading图标和普通图标
const iconSize = computed(() => {
  switch (props.size) {
    case 'small':
      return 14
    case 'large':
      return 20
    case 'medium':
      return 18
    default:
      return 18
  }
})

// 处理图标组件，确保它不会被转换为响应式对象
const processedIcon = computed(() => {
  if (!props.icon) return undefined
  return typeof props.icon === 'string' ? props.icon : markRaw(props.icon)
})

const slots = useSlots()
</script>

<template>
  <button
      :class="[
      bem.b(),
      bem.m(props.type),
      bem.m(props.size || 'medium'),
      bem.is('round', props.round),
      bem.is('loading', props.loading),
      bem.is('disabled', props.disabled),
      bem.is('default', !props.type),
      bem.is('plain', props.plain),
      bem.is('circle', props.circle),
      bem.is(`icon-${props.iconPosition}`, !!showIcon && !!$slots.default)
    ]"
      :type="nativeType"
      :disabled="disabled || loading"
  >
    <!-- 左侧图标 -->
    <template v-if="(loading || slots.icon || props.icon) && (!props.iconPosition || props.iconPosition === 'left')">
      <component v-if="loading" :is="loadingIcon || Loading" :size="iconSize" class="loading-icon"/>
      <slot v-else-if="slots.icon" name="icon"></slot>
      <component v-else-if="props.icon" :is="processedIcon" :size="iconSize"></component>
    </template>
    <!-- 插槽内容 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>

    <!-- 右侧图标 -->
    <template v-if="(loading || slots.icon || props.icon) && props.iconPosition === 'right'">
      <component
          v-if="loading"
          :is="loadingIcon || Loading"
          :size="iconSize"
          class="loading-icon"
      />
      <slot v-else-if="slots.icon" name="icon"></slot>
      <component v-else-if="props.icon" :is="processedIcon" :size="iconSize"></component>
    </template>

  </button>
</template>
