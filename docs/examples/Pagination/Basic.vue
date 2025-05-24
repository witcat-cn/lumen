<script setup lang="ts">
import { ref } from 'vue'

const page = ref(1)
const pageSize = ref(20)

</script>

<template>
  <lm-pagination v-model:current-page="page" :total="200" v-model:page-size="pageSize" layout="prev, pager, next, jumper, total" />
</template>

