import { test } from 'tap'
import { parse, GraphQLSchema } from 'graphql'
import buildServer from '../index.js'

const query = '{ add(x: 3, y: 5) }'

test('hooks', async t => {
  t.plan(17)
  const server = buildServer()

  await server.ready()

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

  server.graphql.addHook('preGatewayExecution', async function () {
    t.fail('this should not be called')
  })

  server.graphql.addHook('onResolution', async function (execution, context) {
    t.type(execution, 'object')
    t.type(context, 'object')
    t.ok('onResolution called')
  })

  const response = await server.inject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    url: '/graphql',
    payload: JSON.stringify({ query })
  })

  const { data, errors } = await response.json()

  t.equal(errors, undefined)
  t.strictSame(data, {
    add: 8
  })
})

test('GET /', async t => {
  const server = buildServer()
  const response = await server.inject({
    method: 'GET',
    url: '/'
  })

  const { data, errors } = await response.json()

  t.equal(errors, undefined)
  t.strictSame(data, {
    add: 4
  })
})
