<template>
  <div class="navigation">
    <button type="button" class="navigation__toggler" @click="toggleCategories()">
      Categories
    </button>
    <nav class="navigation__items" :class="{ 'navigation__items--open': showCategories }">
      <RouterLink
        :to="{ name: 'Overview' }"
        v-if="route.name !== 'Overview'"
        @click="toggleCategories()"
      >
        Home
      </RouterLink>
      <RouterLink
        :to="{ name: 'Category', params: { genre: genre.name } }"
        class="navigation__category"
        v-for="genre in listStore.overview"
        :key="genre.name"
        @click="toggleCategories()"
      >
        {{ genre.name }}
      </RouterLink>
      <button type="button" class="navigation__toggler" @click="toggleCategories()">Close</button>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { useListStore } from '../stores/list'

const showCategories = ref(false)

const route = useRoute()

const listStore = useListStore()

const toggleCategories = () => {
  showCategories.value = !showCategories.value
}
</script>

<style scoped>
.navigation__toggler {
  width: 100%;
  background-color: #194971;
  padding: 5px 10px;
  border: thin solid #fbbd41;
}

.navigation__items {
  display: none;
}

.navigation__category {
  padding: 0 5px;
}

@media screen and (max-width: 767px) {
  .navigation__items--open {
    display: flex;
    padding: 20px;
    flex-direction: column;
    position: fixed;
    background-color: #194971f6;
    inset: 0px;
    width: 100vw;
    height: 100vh;
    align-items: center;
    gap: 20px;
    overflow-y: scroll;
  }
}

@media screen and (min-width: 768px) {
  .navigation {
    overflow-x: scroll;
    white-space: nowrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .navigation::-webkit-scrollbar {
    display: none;
  }

  .navigation__items {
    display: flex;
    gap: 10px;
  }

  .navigation__toggler {
    display: none;
  }
}
</style>
