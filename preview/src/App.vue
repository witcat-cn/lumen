<script setup lang="ts">
import { Search, SquarePen, Check, Mail, Star, Trash2 } from 'lucide-vue-next'

</script>

<template>
  <div class="mb-4">
    <lm-button>Default</lm-button>
    <lm-button type="primary">Primary</lm-button>
    <lm-button type="success">Success</lm-button>
    <lm-button type="warning">Warning</lm-button>
    <lm-button type="danger">Danger</lm-button>
    <lm-button type="info">Info</lm-button>
  </div>
  <div class="mb-4">
    <lm-button plain>Plain</lm-button>
    <lm-button type="primary" plain>Primary</lm-button>
    <lm-button type="success" plain>Success</lm-button>
    <lm-button type="warning" plain>Warning</lm-button>
    <lm-button type="danger" plain>Danger</lm-button>
    <lm-button type="info" plain>Info</lm-button>
  </div>
  <div class="mb-4">
    <lm-button round>Default</lm-button>
    <lm-button type="primary" round>Primary</lm-button>
    <lm-button type="success" round>Success</lm-button>
    <lm-button type="warning" round>Warning</lm-button>
    <lm-button type="danger" round>Danger</lm-button>
    <lm-button type="info" round>Info</lm-button>
  </div>

  <div class="mb-4">
    <lm-button :icon="Search" circle/>
    <lm-button type="primary" :icon="SquarePen" circle/>
    <lm-button type="success" :icon="Check" circle/>
    <lm-button type="warning" :icon="Star" circle/>
    <lm-button type="info" :icon="Mail" circle/>
    <lm-button type="danger" :icon="Trash2" circle/>

  </div>
</template>

<style scoped lang="scss">
.mb-4 {
  padding: 2px;
}
</style>
