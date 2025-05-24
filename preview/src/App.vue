<script setup lang="ts">
</script>

<template>
  <lm-layout direction="horizontal" class="app-layout">
    <lm-aside>Aside</lm-aside>
    <lm-layout direction="vertical">
      <lm-header>
        <p>Header</p>
      </lm-header>
      <lm-main>
        <lm-container direction="horizontal">
          <p>Main</p>
        </lm-container>
      </lm-main>
      <lm-footer>Footer</lm-footer>
    </lm-layout>
  </lm-layout>
</template>

<style scoped lang="scss">

</style>