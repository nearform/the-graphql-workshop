import { test } from 'node:test'
import assert from 'node:assert/strict'
import buildServer from '../index.js'

test('should accept parameters as variables and return sum of two numbers', async () => {
  const server = buildServer()

  await server.ready()

  const response = await server.inject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    url: '/graphql',
    payload: {
      operationName: 'AddQuery',
      variables: { x: 3, y: 5 },
      query: `
        query AddQuery ($x: Int!, $y: Int!) {
            add(x: $x, y: $y)
        }`
    }
  })

  assert.equal(response.statusCode, 200)

  const { data, errors } = await response.json()

  assert.equal(errors, undefined)
  assert.deepStrictEqual(data, {
    add: 8
  })
})
