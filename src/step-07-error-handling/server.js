import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers } from './graphql.js'

const app = Fastify({
  logger: {
    prettyPrint: true
  }
})

app.register(mercurius, {
  schema,
  resolvers
})

app.listen(3000)
