import { test } from 'tap'
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

test('should return owner of the pet ', async t => {
  const server = await buildServer()

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
    body: JSON.stringify({ query })
  })

  t.equal(response.statusCode, 200)

  const { data, errors } = await response.json()

  t.equal(errors, undefined)
  t.strictSame(data, {
    pets: [
      {
        name: 'Max',
        owner: {
          name: 'Jennifer'
        }
      },
      {
        name: 'Charlie',
        owner: {
          name: 'Simon'
        }
      }
    ]
  })
})
