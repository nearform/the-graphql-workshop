import t from 'tap'
import fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers } from './graphql.js'

const buildServer = async () => {
  const server = fastify({
    logger: false
  })

  server.register(mercurius, {
    schema,
    resolvers,
    errorFormatter: result => {
      if (result.errors?.length) {
        return {
          statusCode: 400,
          response: {
            data: null,
            errors: result.errors
          }
        }
      }

      return {
        statusCode: 200,
        response: {
          data: result.data || {},
          errors: []
        }
      }
    }
  })

  return server
}

t.test('should throw error with proper message and code', async t => {
  const server = await buildServer()

  const query = `query {
    findUser(id: "5") {
        name
      }
    }`

  const response = await server.inject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    url: '/graphql',
    body: JSON.stringify({ query })
  })

  t.equal(response.statusCode, 400)

  const { data, errors } = await response.json()

  t.same(data, null)
  t.same(errors.length, 1)
  t.strictSame(errors, [
    {
      message: 'Invalid User ID',
      locations: [
        {
          line: 2,
          column: 5
        }
      ],
      path: ['findUser'],
      extensions: {
        id: '5',
        code: 'USER_ID_INVALID'
      }
    }
  ])
})
