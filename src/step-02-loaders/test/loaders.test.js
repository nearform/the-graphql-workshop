import t from 'tap'
import fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers, loaders } from '../graphql.js'

const buildServer = async () => {
  const server = fastify({
    logger: false
  })

  server.register(mercurius, {
    schema,
    resolvers,
    loaders
  })

  await server.ready()

  return server
}

t.test('should return owner of the dog ', async t => {
  const server = await buildServer()

  const query = `query {
      dogs {
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
    body: JSON.stringify({ query })
  })

  t.equal(response.statusCode, 200)

  const { data, errors } = await response.json()

  t.strictSame(errors, undefined)
  t.strictSame(data, {
    dogs: [
      {
        name: 'Max',
        owner: {
          name: 'Jennifer'
        }
      },
      {
        name: 'Charlie',
        owner: {
          name: 'Sarah'
        }
      }
    ]
  })
})
