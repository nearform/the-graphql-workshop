import { test } from 'node:test'
import assert from 'node:assert/strict'
import buildServer from '../index.js'

test('should retrieve correct value from context', async () => {
  const server = buildServer()

  await server.ready()

  const query = `query {
      getUserByLocale {
        name
      }
    }`

  const response = await server.inject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    url: '/graphql',
    payload: JSON.stringify({ query })
  })

  assert.equal(response.statusCode, 200)

  const { data, errors } = await response.json()

  assert.equal(errors, undefined)
  assert.deepStrictEqual(data, {
    getUserByLocale: {
      name: 'Alice'
    }
  })
})
