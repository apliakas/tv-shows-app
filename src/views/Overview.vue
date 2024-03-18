<template>
  <div class="overview">
    <Section
      :name="genre.name"
      :shows="genre.shows"
      v-for="genre in listStore.overview"
      :key="genre.name"
    />
  </div>
</template>

<script setup>
import Section from '../components/Section.vue'

import { useListStore } from '../stores/list'

const listStore = useListStore()
</script>

<style scoped>
.overview {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
