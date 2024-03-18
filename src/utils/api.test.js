import { describe, test, expect, vi } from 'vitest'

import api from './api'
import * as request from './request'

describe('API util', () => {
  test('request list is called', async () => {
    const spiedRequest = vi.spyOn(request, 'default')

    spiedRequest.mockImplementationOnce(() => vi.fn())

    api.list()

    expect(spiedRequest).toHaveBeenCalledWith({ path: 'shows' })
  })

  test('request detail is called with id', async () => {
    const spiedRequest = vi.spyOn(request, 'default')

    spiedRequest.mockImplementationOnce(() => vi.fn())

    api.detail('test')

    expect(spiedRequest).toHaveBeenCalledWith({ path: 'shows/test' })
  })

  test('request search is called with query', async () => {
    const spiedRequest = vi.spyOn(request, 'default')

    spiedRequest.mockImplementationOnce(() => vi.fn())

    api.search('test')

    expect(spiedRequest).toHaveBeenCalledWith({ path: 'search/shows?q=test' })
  })
})
