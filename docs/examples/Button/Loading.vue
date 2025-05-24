<script setup lang="ts">
import { Loader, LoaderPinwheel } from 'lucide-vue-next'
</script>

<template>
  <div class="mb-2">
    <lm-button type="primary" loading>Loading</lm-button>
    <lm-button type="primary" :loading-icon="Loader" loading>Loading</lm-button>
    <lm-button type="primary" :loading-icon="LoaderPinwheel" loading icon-position="right">Loading</lm-button>
  </div>
</template>
