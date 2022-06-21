import { test } from 'tap'
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

  t.equal(response.statusCode, 200)

  const { data, errors } = await response.json()

  t.equal(errors, undefined)
  t.strictSame(data, {
    add: 8
  })
})
