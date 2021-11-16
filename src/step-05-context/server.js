import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers } from './graphql.js'

const app = Fastify()

app.register(mercurius, {
  schema,
  resolvers,
  context: () => ({
    locale: 'en'
  })
})

app.listen(3000)
