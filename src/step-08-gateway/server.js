import Fastify from 'fastify'
import mercurius from 'mercurius'
import { createService } from './services/service.js'
import { service1 } from './services/service1.js'
import { service2 } from './services/service2.js'

async function start() {
  await createService(4001, service1.schema, service1.resolvers)

  await createService(4002, service2.schema, service2.resolvers)

  const gateway = Fastify()
  gateway.register(mercurius, {
    graphiql: true,
    jit: 1,
    gateway: {
      services: [
        {
          name: 'user',
          url: 'http://localhost:4001/graphql'
        },
        {
          name: 'post',
          url: 'http://localhost:4002/graphql'
        }
      ]
    }
  })

  await gateway.listen(4000)
}

start()
