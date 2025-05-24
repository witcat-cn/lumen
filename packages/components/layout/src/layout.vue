<script setup lang="ts">
import { createNamespace } from '@lumen-ui/utils/create'
import { layoutProps } from './layout'

const bem = createNamespace('layout')
defineOptions({name: 'lm-layout'})

const props = defineProps(layoutProps)
</script>

<template>
  <div :class="[bem.b(), bem.m(props.direction)]">
    <slot/>
  </div>
</template>

<style scoped lang="scss">

</style>