import Fastify from 'fastify'
import mercuriusGateway from '@mercuriusjs/gateway'
import mercuriusAuth from 'mercurius-auth'

export default function buildGateway() {
  const gateway = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
  })

  gateway.register(mercuriusGateway, {
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

  gateway.register(mercuriusAuth, {
    authContext(context) {
      return {
        role: context.reply.request.headers['x-role']
      }
    },
    async applyPolicy(authDirectiveAST, parent, args, context) {
      const directiveRole = authDirectiveAST.arguments.find(
        arg => arg.name.value === 'role'
      ).value.value

      return (
        context.auth.role === directiveRole || context.auth.role === 'ADMIN'
      )
    },
    authDirective: 'auth'
  })

  return gateway
}
