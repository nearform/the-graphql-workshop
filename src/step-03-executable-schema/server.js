import Fastify from 'fastify'
import mercurius from 'mercurius'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { typeDefs, resolvers } from './graphql.js'

const app = Fastify({
  logger: {
    prettyPrint: true
  }
})

app.register(mercurius, {
  schema: makeExecutableSchema({ typeDefs, resolvers })
})

app.listen(3000)
