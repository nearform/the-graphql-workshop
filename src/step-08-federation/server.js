import buildGateway from './index.js'
import { createService } from './services/service.js'
import { service1 } from './services/service1.js'
import { service2 } from './services/service2.js'

async function start() {
  await createService(4001, service1.schema, service1.resolvers)

  await createService(4002, service2.schema, service2.resolvers)

  const gateway = buildGateway()

  await gateway.listen({ port: 4000 })
}

start()
