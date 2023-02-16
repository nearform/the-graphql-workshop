import Fastify from 'fastify'
import { mercuriusFederationPlugin } from '@mercuriusjs/federation'

const createService = async (port, schema, resolvers) => {
  const service = Fastify()

  service.register(mercuriusFederationPlugin, {
    schema,
    resolvers,
    graphiql: true,
    jit: 1
  })
  await service.listen({ port })

  return service
}

export { createService }
