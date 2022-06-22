import Fastify from 'fastify'
import mercurius from 'mercurius'
import config from './lib/config.js'
import { schema, resolvers, loaders } from './graphql.js'

export default function buildServer() {
  const server = Fastify(config)

  server.register(import('@fastify/postgres'), {
    connectionString: config.PG_CONNECTION_STRING
  })

  server.register(mercurius, {
    schema,
    resolvers,
    loaders,
    graphiql: true
  })

  return server
}
