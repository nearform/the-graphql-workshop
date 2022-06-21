import Fastify from 'fastify'
import mercurius from 'mercurius'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { typeDefs, resolvers } from './graphql.js'

export default function buildServer() {
  const server = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
  })

  server.register(mercurius, {
    schema: makeExecutableSchema({ typeDefs, resolvers })
  })

  return server
}
