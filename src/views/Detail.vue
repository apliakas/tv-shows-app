<template>
  <div v-if="show">
    <article class="show">
      <img :src="show.image.original" class="show__image" v-if="show.image" />
      <div class="show__image show__image--empty" v-else />
      <h2 class="show__name">{{ show.name }}</h2>
      <div class="show__rating">Rating: {{ show.rating.average }}</div>
      <p class="show__description">
        {{ show.description }}
      </p>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import api from '../utils/api'

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const show = ref(null)

api.detail(props.id).then((data) => {
  const element = document.createElement('div')
  element.innerHTML = data.summary

  show.value = {
    ...data,
    description: element.textContent
  }
})
</script>

<style scoped>
.show {
  display: grid;
  gap: 20px;
  grid-template-areas: 'name' 'rating' 'image' 'description';
}

.show__image {
  width: 100%;
  grid-area: image;
}

.show__image--empty {
  background-color: #ccc;
  position: relative;
  min-height: 30vh;
}

.show__image--empty::after {
  font-size: 2rem;
  content: 'No cover';
  color: #666;
  position: absolute;
  text-transform: uppercase;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
}

.show__name {
  text-align: center;
  grid-area: name;
  font-size: 5rem;
}

.show__rating {
  text-align: center;
  grid-area: rating;
}

.show__description {
  grid-area: description;
}

@media screen and (min-width: 768px) {
  .show {
    grid-template-areas: 'image name' 'image rating' 'image description' 'image .';
    grid-template-columns: max(30vw, 400px) 1fr;
    grid-template-rows: repeat(3, min-content);
  }
}
</style>
