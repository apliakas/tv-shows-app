<template>
  <RouterLink :to="{ name: 'Detail', params: { id: data.id } }">
    <article class="show">
      <div
        class="show__image"
        :class="{ 'show__image--empty': !data.image }"
        :style="{ backgroundImage: data.image ? `url(${data.image.medium})` : undefined }"
      />
      <h3 class="show__name">
        {{ data.name }}
      </h3>
    </article>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.show {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.show__image {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 2/3;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.show__image--empty {
  background-color: #ccc;
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

.show:hover .show__image::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: #e7464b66;
  display: block;
}

.show__name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
