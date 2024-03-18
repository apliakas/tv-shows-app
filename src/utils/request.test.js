import { describe, test, expect, vi } from 'vitest'
import createFetchMock from 'vitest-fetch-mock'

const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()

import request from './request'

describe('Request util', () => {
  test('', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))

    expect(await request({})).toEqual({ data: '12345' })
  })
})
