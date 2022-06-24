import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers } from './graphql.js'

export default function buildServer() {
  const server = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
  })

  server.get('/', async function (req, reply) {
    const query = '{ add(x: 2, y: 2) }'
    return reply.graphql(query)
  })

  server.register(mercurius, {
    schema,
    resolvers,
    graphiql: true
  })

  return server
}
