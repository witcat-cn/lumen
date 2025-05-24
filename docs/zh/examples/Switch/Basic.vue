<script setup lang="ts">
import { ref } from 'vue'
const on = ref(false)
</script>

<template>
  <lm-switch v-model="on" active-text="开" inactive-text="关" />
  <lm-switch v-model="on" size="small" />
</template>

