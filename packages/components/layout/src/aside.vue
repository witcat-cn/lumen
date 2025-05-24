<script setup lang="ts">
import { createNamespace } from '@lumen-ui/utils/create'
import { asideProps, type AsideProps } from './aside'

const bem = createNamespace('layout-aside')
defineOptions({ name: 'lm-aside' })

const props = defineProps(asideProps)
</script>

<template>
  <aside :class="bem.b()" :style="{ width: props.width }">
    <slot />
  </aside>
</template>

<style scoped lang="scss">

</style>