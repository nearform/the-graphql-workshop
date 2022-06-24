import Fastify from 'fastify'
import mercurius from 'mercurius'

export default function buildGateway() {
  const gateway = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
  })

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

  return gateway
}
