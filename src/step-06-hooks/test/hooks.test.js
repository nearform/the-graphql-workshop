import { test } from 'node:test'
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
      t.assert.ok(schema instanceof GraphQLSchema)
      t.assert.equal(source, query)
      t.assert.equal(typeof context, 'object')
      t.assert.ok('preParsing called')
    }
  )

  server.graphql.addHook(
    'preValidation',
    async function (schema, document, context) {
      t.assert.ok(schema instanceof GraphQLSchema)

      t.assert.deepEqual(document, parse(query))
      t.assert.equal(typeof context, 'object')
      t.assert.ok('preValidation called')
    }
  )

  server.graphql.addHook(
    'preExecution',
    async function (schema, document, context) {
      t.assert.ok(schema instanceof GraphQLSchema)
      t.assert.deepEqual(document, parse(query))
      t.assert.equal(typeof context, 'object')
      t.assert.ok('preExecution called')
    }
  )

  server.graphql.addHook('onResolution', async function (execution, context) {
    t.assert.equal(typeof execution, 'object')
    t.assert.equal(typeof context, 'object')
    t.assert.ok('onResolution called')
  })

  const response = await server.inject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    url: '/graphql',
    payload: JSON.stringify({ query })
  })

  const { data, errors } = await response.json()

  t.assert.equal(errors, undefined)
  t.assert.deepStrictEqual(data, {
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

  t.assert.equal(errors, undefined)
  t.assert.deepStrictEqual(data, {
    add: 4
  })
})
