<template>
  <section class="section">
    <h2 class="section__title">
      <RouterLink :to="{ name: 'Category', params: { genre: name } }"> {{ name }} </RouterLink>
    </h2>
    <TVShows :data="shows" scrollable />
    <RouterLink :to="{ name: 'Category', params: { genre: name } }" class="section__see-more">
      Go to category
    </RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import TVShows from './TVShows.vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  shows: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.section__title {
  font-size: 3rem;
}

.section__see-more {
  font-size: 1.4rem;
  text-align: center;
  background-color: #0a1a33;
  border: thin solid #fbbd41;
  padding: 10px;
  margin: 10px auto 0;
}

.section__see-more:hover {
  border-color: #e7464b;
}
</style>
