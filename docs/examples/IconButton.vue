<script setup lang="ts">

import { Search, SquarePen, Trash2, Share, Upload } from 'lucide-vue-next'
</script>

<template>
  <div class="mb-4">
    <lm-button type="primary" :icon="SquarePen"/>
    <lm-button type="primary" :icon="Share"/>
    <lm-button type="primary" :icon="Trash2"/>
    <lm-button type="primary" :icon="Search">Search</lm-button>
    <lm-button type="primary" :icon="Upload" icon-position="right">Upload</lm-button>
  </div>

</template>

<style scoped lang="scss">

</style>
