import Fastify from 'fastify'
import mercurius from 'mercurius'
import config from './lib/config.js'
import { schema, resolvers, loaders } from './graphql.js'

const app = Fastify(config)

app.register(import('fastify-postgres'), {
  connectionString: config.PG_CONNECTION_STRING
})

app.register(mercurius, {
  schema,
  resolvers,
  loaders,
  graphiql: true
})

app.listen({ port: 3000 })
