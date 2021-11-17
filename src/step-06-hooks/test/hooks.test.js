import { test } from 'tap'
import fastify from 'fastify'
import mercurius from 'mercurius'
import { parse, GraphQLSchema } from 'graphql'
import { schema, resolvers } from '../graphql.js'

const buildServer = async () => {
  const server = fastify({
    logger: false
  })

  server.register(mercurius, {
    schema,
    resolvers
  })

  await server.ready()

  return server
}

const query = '{ add(x: 3, y: 5) }'

test('hooks', async t => {
  t.plan(17)
  const server = await buildServer()

  server.graphql.addHook(
    'preParsing',
    async function (schema, source, context) {
      t.type(schema, GraphQLSchema)
      t.equal(source, query)
      t.type(context, 'object')
      t.ok('preParsing called')
    }
  )

  server.graphql.addHook(
    'preValidation',
    async function (schema, document, context) {
      t.type(schema, GraphQLSchema)
      t.same(document, parse(query))
      t.type(context, 'object')
      t.ok('preValidation called')
    }
  )

  server.graphql.addHook(
    'preExecution',
    async function (schema, document, context) {
      t.type(schema, GraphQLSchema)
      t.same(document, parse(query))
      t.type(context, 'object')
      t.ok('preExecution called')
    }
  )

  server.graphql.addHook(
    'preGatewayExecution',
    async function (schema, document, context) {
      t.fail('this should not be called')
    }
  )

  server.graphql.addHook(
    'onResolution',
    async function (execution, context) {
      t.type(execution, 'object')
      t.type(context, 'object')
      t.ok('onResolution called')
    }
  )

  const response = await server.inject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    url: '/graphql',
    body: JSON.stringify({ query })
  })

  const { data, errors } = await response.json()

  t.equal(errors, undefined)
  t.strictSame(data, {
    add: 8
  })
})
