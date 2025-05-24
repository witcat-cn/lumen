<script setup lang="ts">
import { createNamespace } from '@lumen-ui/utils/create'
import type { Direction } from './container'
import { computed } from 'vue'

const bem = createNamespace('container')
defineOptions({name: 'lm-container'})

const props = defineProps<{
  direction?: Direction
  padding?: string | number
  background?: string
}>()

const style = computed(() => {
  return {
    padding: typeof props.padding === 'number' ? `${props.padding}px` : props.padding,
    backgroundColor: props.background,
  }
})
</script>

<template>
  <div
      :class="[bem.e(), bem.m(props.direction)]"
      :style="style"
  >
    <slot/>
  </div>
</template>

