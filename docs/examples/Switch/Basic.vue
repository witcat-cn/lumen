<script setup lang="ts">
import { ref } from 'vue'
const on = ref(false)
</script>

<template>
  <lm-switch v-model="on" active-text="On" inactive-text="Off" />
  <lm-switch v-model="on" size="small" />
</template>

