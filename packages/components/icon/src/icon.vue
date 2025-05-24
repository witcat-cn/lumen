<script setup lang="ts">
import { createNamespace } from '@lumen-ui/utils/create'
import { type IconProps } from './icon'
import { computed } from 'vue'

const bem = createNamespace('icon')
const props = defineProps<IconProps>()

defineOptions({
  name: 'lm-icon'
})
const style = computed(() => {
  if (!props.size && !props.color) return {}
  const sizeStyle = props.size ? {width: props.size + 'px', height: props.size + 'px'} : {}
  const colorStyle = props.color ? {color: props.color} : {}
  return {
    ...sizeStyle,
    ...colorStyle,
  }
})

</script>

<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

