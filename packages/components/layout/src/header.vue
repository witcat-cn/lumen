<script setup lang="ts">
import { createNamespace } from '@lumen-ui/utils/create'
import { headerProps, type HeaderProps } from './header'

const bem = createNamespace('layout-header')
defineOptions({name: 'lm-header'})

const props = defineProps(headerProps)
</script>

<template>
  <header :class="bem.b()" :style="{ height: props.height }">
    <slot/>
  </header>
</template>