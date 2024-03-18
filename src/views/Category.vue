<template>
  <div class="category">
    <h2 class="category__title">
      {{ genre }}
    </h2>
    <TVShows :data="shows" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

import TVShows from '../components/TVShows.vue'

import { useListStore } from '../stores/list'

const props = defineProps({
  genre: {
    type: String,
    required: true
  }
})

const listStore = useListStore()

const shows = computed(() => {
  if (props.genre === 'Most popular') {
    return listStore.shows
  }

  return listStore.genres[props.genre]
})
</script>

<style scoped>
.category {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.category__title {
  font-size: 3rem;
}
</style>
