import { test } from 'node:test'
import assert from 'node:assert/strict'
import buildServer from '../index.js'

test('should return owner of the pet', async t => {
  const server = buildServer()

  await server.ready()

  const query = `query {
      pets {
        name
        owner {
          name
        }
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
    pets: [
      {
        name: 'Max',
        owner: {
          name: 'Simon'
        }
      },
      {
        name: 'Charlie',
        owner: {
          name: 'Jennifer'
        }
      }
    ]
  })
})
