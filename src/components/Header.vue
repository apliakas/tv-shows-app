<template>
  <header class="header">
    <div class="header__content">
      <Navigation class="header__navigation" />
      <Search class="header__search" />
    </div>
  </header>
</template>

<script setup>
import Navigation from './Navigation.vue'
import Search from './Search.vue'
</script>

<style scoped>
.header {
  background-color: #194971;
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 1;
}

.header__content {
  display: flex;
  gap: 20px;
  padding: 20px;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
}

@media screen and (min-width: 768px) {
  .header__content {
    justify-content: space-between;
    gap: 40px;
  }

  .header__navigation {
    width: initial;
    flex-shrink: 1;
  }

  .header__search {
    width: min(40%, 400px);
    flex-shrink: 0;
  }
}
</style>
