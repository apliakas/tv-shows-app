import request from './request'

export default {
  list: () =>
    request({
      path: 'shows'
    }),
  detail: (id) =>
    request({
      path: `shows/${id}`
    }),
  search: (query) =>
    request({
      path: `search/shows?q=${query}`
    })
}
