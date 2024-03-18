import { createPinia, setActivePinia } from 'pinia'
import { beforeAll, describe, test, expect, vi } from 'vitest'
import { useListStore } from './list'

const actionDrama = { name: 'Show 1', genres: ['Action', 'Drama'], rating: { average: 5 } }
const dramaComedy = { name: 'Show 2', genres: ['Drama', 'Comedy'], rating: { average: 7 } }
const fillingComedies = [
  { name: 'Show 3', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 4', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 5', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 6', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 6', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 8', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 9', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 10', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 11', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 12', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 13', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 14', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 15', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 16', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 16', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 18', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 19', genres: ['Comedy'], rating: { average: 4 } },
  { name: 'Show 20', genres: ['Comedy'], rating: { average: 4 } }
]
const fillingComedy = { name: 'Show 21', genres: ['Comedy'], rating: { average: 4 } }
const lastComedy = { name: 'Show 22', genres: ['Comedy'], rating: { average: 4 } }

vi.mock('../utils/api', () => ({
  default: {
    list: () =>
      new Promise((resolve) =>
        resolve([actionDrama, dramaComedy, ...fillingComedies, fillingComedy, lastComedy])
      )
  }
}))

describe('List store', () => {
  beforeAll(() => {
    setActivePinia(createPinia())
  })

  test('initializes with no shows', () => {
    const store = useListStore()

    expect(store.shows).toEqual([])
  })

  test('retuns the shows', () => {
    const store = useListStore()

    const testShows = [actionDrama, dramaComedy, ...fillingComedies, fillingComedy, lastComedy]

    expect(store.shows).toEqual(testShows)
  })

  test('sorts the shows by genre and rating', () => {
    const store = useListStore()

    const testGenres = {
      Action: [actionDrama],
      Comedy: [dramaComedy, ...fillingComedies, fillingComedy, lastComedy],
      Drama: [dramaComedy, actionDrama]
    }

    expect(store.genres).toEqual(testGenres)
  })

  test('and adds "Most popular" category', () => {
    const store = useListStore()

    const testOverview = [
      { name: 'Most popular', shows: [dramaComedy, actionDrama, ...fillingComedies] },
      { name: 'Action', shows: [actionDrama] },
      { name: 'Comedy', shows: [dramaComedy, ...fillingComedies, fillingComedy] },
      { name: 'Drama', shows: [dramaComedy, actionDrama] }
    ]

    expect(store.overview).toEqual(testOverview)
  })
})
