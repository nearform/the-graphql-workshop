'use strict'

import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers } from './graphql.js'

async function start() {
  const app = Fastify()

  app.get('/', async function (req, reply) {
    const query = '{ add(x: 2, y: 2) }'

    return reply.graphql(query)
  })

  app.register(mercurius, {
    schema,
    resolvers,
    graphiql: true
  })

  await app.ready()

  app.graphql.addHook('preParsing', async function () {
    console.log('preParsing called')
  })

  app.graphql.addHook('preValidation', async function () {
    console.log('preValidation called')
  })

  app.graphql.addHook(
    'preExecution',
    async function (schema, document) {
      console.log('preExecution called')
      return {
        document,
        errors: [new Error('foo')]
      }
    }
  )

  app.graphql.addHook('onResolution', async function () {
    console.log('onResolution called')
  })

  app.listen(3000)
}

start()
