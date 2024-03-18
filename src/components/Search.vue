<template>
  <form class="search" @submit.prevent="search()">
    <input class="search__input" v-model="term" />
    <button class="search__submit" type="submit">Search</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const term = ref()

const search = () => {
  router.push({ name: 'Search', query: { query: term.value } })
  term.value = ''
}
</script>

<style scoped>
.search {
  display: flex;
}

.search__input {
  flex-grow: 1;
  background-color: #2e87ad;
  border: thin solid #fbbd41;
  color: #fbbd41;
  border-right: 0;
  font: inherit;
  padding: 5px 10px;
}

.search__input:focus {
  outline: none;
}

.search__submit {
  text-align: center;
  background-color: #194971;
  border: thin solid #fbbd41;
  padding: 5px 10px;
}

.search__submit:hover {
  border-color: #e7464b;
}
</style>
