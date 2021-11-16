import t from 'tap'
import fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers, loaders } from './graphql.js'
import sinon from 'sinon'

const queryStub = sinon.stub()

const dbClientMock = {
  query: async () => queryStub()
}

const buildServer = async () => {
  const server = fastify({
    logger: false
  })

  server.register(mercurius, {
    schema,
    resolvers,
    loaders
  })

  server.decorate('pg', dbClientMock)

  return server
}

t.test('should return owner of the dog ', async t => {
  const server = await buildServer()

  queryStub
    .onCall(0)
    .returns({ rows: [{ name: 'Max' }, { name: 'Charlie' }] })
  queryStub
    .onCall(1)
    .returns({ rows: [{ name: 'Jennifer' }, { name: 'Sarah' }] })

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
  t.same(queryStub.calledTwice, true)
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
