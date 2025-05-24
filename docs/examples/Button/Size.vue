<script setup lang="ts">
import { Search } from 'lucide-vue-next';
</script>

<template>
  <div class="mb-2">
    <lm-button size="large">Default</lm-button>
    <lm-button size="medium">Default</lm-button>
    <lm-button size="small">Default</lm-button>
    <lm-button size="large" :icon="Search">Search</lm-button>
    <lm-button size="medium" :icon="Search">Search</lm-button>
    <lm-button size="small" :icon="Search">Search</lm-button>
  </div>
  <div class="mb-2">
    <lm-button size="large" round>Search</lm-button>
    <lm-button size="medium" round>Search</lm-button>
    <lm-button size="small" round>Search</lm-button>
    <lm-button size="large" :icon="Search" round>Search</lm-button>
    <lm-button size="medium" :icon="Search" round>Search</lm-button>
    <lm-button size="small" :icon="Search" round>Search</lm-button>
  </div>
  <div class="mb-2">
    <lm-button size="large" :icon="Search" circle/>
    <lm-button size="medium" :icon="Search" circle/>
    <lm-button size="small" :icon="Search" circle/>
  </div>
</template>