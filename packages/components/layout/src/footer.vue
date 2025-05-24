<script setup lang="ts">
import { createNamespace } from '@lumen-ui/utils/create'
import { footerProps, type FooterProps } from './footer'

const bem = createNamespace('layout-footer')
defineOptions({ name: 'lm-footer' })

const props = defineProps(footerProps)
</script>

<template>
  <footer :class="bem.b()" :style="{ height: props.height }">
    <slot />
  </footer>
</template>

<style scoped lang="scss"></style>