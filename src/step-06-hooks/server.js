'use strict'

import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers } from './graphql.js'

async function start() {
  const app = Fastify({
    logger: {
      prettyPrint: true
    }
  })

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
    app.log.info('preParsing called')
  })

  app.graphql.addHook('preValidation', async function () {
    app.log.info('preValidation called')
  })

  app.graphql.addHook('preExecution', async function (schema, document) {
    app.log.info('preExecution called')
    return {
      document,
      errors: [new Error('foo')]
    }
  })

  app.graphql.addHook('onResolution', async function () {
    app.log.info('onResolution called')
  })

  app.listen({ port: 3000 })
}

start()
