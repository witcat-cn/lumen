<script setup lang="ts">
import { ref } from 'vue'
const a = ref(false)
const b = ref(false)
const group = ref<any[]>([])
</script>

<template>
  <div style="display:flex; gap: 12px; flex-wrap: wrap">
    <lm-checkbox v-model="a" label="A" />
    <lm-checkbox v-model="b" label="B" />
  </div>
  <div style="margin-top: 8px; display:flex; gap: 12px; flex-wrap: wrap">
    <lm-checkbox-group v-model="group">
      <lm-checkbox label="Apple" />
      <lm-checkbox label="Banana" />
      <lm-checkbox label="Cherry" />
    </lm-checkbox-group>
  </div>
</template>

