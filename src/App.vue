<template>
  <Header />
  <div class="app">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue'
</script>

<style scoped>
.app {
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  padding: 40px 20px;
}
</style>
