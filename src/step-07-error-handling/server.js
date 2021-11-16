import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers } from './graphql.js'

const app = Fastify()

app.register(mercurius, {
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

app.listen(3000)
