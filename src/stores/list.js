import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import api from '../utils/api'

export const useListStore = defineStore('list', () => {
  const shows = ref([])

  const sortedShows = computed(() =>
    shows.value.sort((a, b) => b.rating.average - a.rating.average)
  )

  const genres = computed(() => {
    return sortedShows.value.reduce((genres, show) => {
      show.genres.forEach((genre) => {
        if (!genres[genre]) {
          genres[genre] = []
        }

        genres[genre] = [...genres[genre], show]
      })

      return genres
    }, {})
  })

  const overview = computed(() => {
    const sortedGenres = Object.entries(genres.value)
      .map(([name, shows]) => ({
        name,
        shows: shows.slice(0, 20)
      }))
      .sort((a, b) => a.name.localeCompare(b.name))

    return [
      {
        name: 'Most popular',
        shows: sortedShows.value.slice(0, 20)
      },
      ...sortedGenres
    ]
  })

  const fetch = () => api.list().then((data) => (shows.value = data))

  if (!shows.value.length) {
    fetch()
  }

  return { shows, overview, genres }
})
