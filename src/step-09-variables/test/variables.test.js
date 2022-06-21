import { test } from 'tap'
import buildServer from '../index.js'

test('should accept parameters as variables and return sum of two numbers', async t => {
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

  t.equal(response.statusCode, 200)

  const { data, errors } = await response.json()

  t.equal(errors, undefined)
  t.strictSame(data, {
    add: 8
  })
})
