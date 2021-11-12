import Fastify from 'fastify'
import mercurius from 'mercurius'
import { makeExecutableSchema } from '@graphql-tools/schema'

const app = Fastify()

const typeDefs = `
  type Query {
    add(x: Int, y: Int): Int
  }
`

const resolvers = {
  Query: {
    add: async (_, { x, y }) => x + y
  }
}

app.register(mercurius, {
  schema: makeExecutableSchema({ typeDefs, resolvers })
})

app.listen(3000)
