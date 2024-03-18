<template>
  <div class="shows" :class="{ 'shows--scrollable': scrollable }">
    <TVShow class="shows__show" :data="show" v-for="show in data" :key="show.id" />
  </div>
</template>

<script setup>
import TVShow from './TVShow.vue'

defineProps({
  data: {
    type: Object,
    required: true
  },
  scrollable: Boolean
})
</script>

<style scoped>
.shows {
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.shows--scrollable {
  overflow-x: scroll;
  grid-auto-flow: column;
  -ms-overflow-style: none;
  scrollbar-width: none;
  grid-template-columns: initial;
  grid-auto-columns: 150px;
  grid-template-columns: repeat(auto-fill, 150px);
}

.shows--scrollable::-webkit-scrollbar {
  display: none;
}

@media screen and (min-width: 768px) {
  .shows {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .shows--scrollable {
    grid-auto-columns: 200px;
    grid-template-columns: repeat(auto-fill, 200px);
  }
}
</style>
