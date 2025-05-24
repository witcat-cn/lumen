<script setup lang="ts">
import { ref } from 'vue'

const page = ref(1)
</script>

<template>
  <lm-pagination v-model="page" :total="200" :page-size="20" />
</template>

