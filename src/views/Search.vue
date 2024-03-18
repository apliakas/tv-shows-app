<template>
  <div class="search" v-if="shows.length">
    <h2 class="search__term">Search: {{ term }}</h2>
    <TVShows :data="shows" />
  </div>
  <div class="search search--empty" v-else>No results</div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

import TVShows from '../components/TVShows.vue'

import api from '../utils/api'

const term = ref()

const shows = ref([])

const search = (route) => {
  const { query } = route.query

  term.value = query

  api.search(query).then((data) => (shows.value = data.map(({ show }) => show)))
}

onBeforeMount(() => {
  const route = useRoute()
  search(route)
})
onBeforeRouteUpdate((route) => search(route))
</script>

<style scoped>
.search {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.search__term {
  font-size: 3rem;
}
</style>
