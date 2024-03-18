const api = 'https://api.tvmaze.com'

export default async ({ method, path, body }) => {
  const url = path ? `${api}/${path}` : api

  const response = await fetch(url, {
    method: method || 'GET',
    body: body ? JSON.stringify(body) : undefined
  })

  if (response.status !== 200) {
    return response
  }

  return await response.json()
}
