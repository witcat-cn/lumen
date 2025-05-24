<script setup lang="ts">
import { createNamespace } from '@lumen-ui/utils/create'

const bem = createNamespace('layout-main')
defineOptions({name: 'lm-main'})

</script>

<template>
  <main :class="bem.b()">
    <slot/>
  </main>
</template>

