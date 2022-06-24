import { test } from 'tap'
import buildServer from '../index.js'

test('should retrieve correct value from context', async t => {
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

  t.equal(response.statusCode, 200)

  const { data, errors } = await response.json()

  t.equal(errors, undefined)
  t.strictSame(data, {
    getUserByLocale: {
      name: 'Alice'
    }
  })
})
