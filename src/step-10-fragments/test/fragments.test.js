import { test } from 'node:test'
import assert from 'node:assert/strict'
import buildServer from '../index.js'

test('should use fragments and return users correctly', async () => {
  const server = buildServer()

  await server.ready()

  const query = `{
      getNoviceUsers {
        ...userFields
      }
      getAdvancedUsers {
        ...userFields
      }
    }
     fragment userFields on User {
        id
        name
        age
        level
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
    getNoviceUsers: [
      {
        id: 1,
        name: 'John Doe',
        age: 32,
        level: 'novice'
      }
    ],
    getAdvancedUsers: [
      {
        id: 2,
        name: 'Jane Doe',
        age: 28,
        level: 'advanced'
      }
    ]
  })
})
