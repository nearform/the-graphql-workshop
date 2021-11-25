import { test } from 'tap'
import fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers } from '../graphql.js'

const buildServer = async () => {
  const server = fastify({
    logger: false
  })

  server.register(mercurius, {
    schema,
    resolvers
  })

  await server.ready()

  return server
}

test('should accept parameters as variables and return sum of two numbers', async t => {
  const server = await buildServer()

  const response = await server.inject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    url: '/graphql',
    body: {
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
