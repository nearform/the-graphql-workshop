'use strict'

import buildServer from './index.js'

async function start() {
  const app = buildServer()

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
