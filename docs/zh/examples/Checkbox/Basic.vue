<script setup lang="ts">
import { ref } from 'vue'
const a = ref(false)
const b = ref(false)
const group = ref<any[]>([])
</script>

<template>
  <div style="display:flex; gap: 12px; flex-wrap: wrap">
    <lm-checkbox v-model="a" label="选项A" />
    <lm-checkbox v-model="b" label="选项B" />
  </div>
  <div style="margin-top: 8px; display:flex; gap: 12px; flex-wrap: wrap">
    <lm-checkbox-group v-model="group">
      <lm-checkbox label="苹果" />
      <lm-checkbox label="香蕉" />
      <lm-checkbox label="樱桃" />
    </lm-checkbox-group>
  </div>
</template>

