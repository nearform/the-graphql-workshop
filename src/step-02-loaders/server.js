import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers, loaders } from './graphql.js'

const app = Fastify({
  logger: {
    prettyPrint: true
  }
})

app.register(mercurius, {
  schema,
  resolvers,
  loaders,
  graphiql: true
})

app.listen(3000)
