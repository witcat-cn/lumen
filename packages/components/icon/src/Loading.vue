<template>
  <svg :width="size + 'px'" :height="size + 'px'" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path
        fill="currentColor"
        stroke="currentColor"
        stroke-width="0.1"
        d="M128 512c0-211.2 172.8-384 384-384s384 172.8 384 384c0 38.4-25.6 64-64 64s-64-25.6-64-64c0-140.8-115.2-256-256-256S256 371.2 256 512s115.2 256 256 256c38.4 0 64 25.6 64 64s-25.6 64-64 64C300.8 896 128 723.2 128 512z">
      <animateTransform attributeName="transform" type="rotate" from="0 512 512" to="360 512 512" dur="1s" repeatCount="indefinite"/>
    </path>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LmLoadingIcon',
  props: {
    size: {
      type: [Number, String],
      default: 18
    }
  }
})
</script>

