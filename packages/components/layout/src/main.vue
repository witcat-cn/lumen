<script setup lang="ts">
import { createNamespace } from '@lumen-ui/utils/create'
import { mainProps, type MainProps } from './main'

const bem = createNamespace('layout-main')
defineOptions({name: 'lm-main'})

const props = defineProps(mainProps)
</script>

<template>
  <main :class="bem.b()">
    <slot/>
  </main>
</template>

<style scoped lang="scss">

</style>