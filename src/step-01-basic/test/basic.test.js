import { test } from 'node:test'
import assert from 'node:assert/strict'
import buildServer from '../index.js'

test('should return sum of two numbers', async t => {
  const server = buildServer()

  await server.ready()

  const query = `query { add(x: 3, y:5) }`

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
    add: 8
  })
})
