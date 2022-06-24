import { test } from 'tap'
import buildServer from '../index.js'

test('should throw error with proper message and code if user not found', async t => {
  const server = buildServer()

  await server.ready()

  const query = `query {
    findUser(id: "5") {
        name
      }
    }`

  const response = await server.inject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    url: '/graphql',
    payload: JSON.stringify({ query })
  })

  t.equal(response.statusCode, 200)

  const { errors } = await response.json()

  t.equal(errors.length, 1)
  t.strictSame(errors, [
    {
      message: 'Invalid User ID',
      locations: [
        {
          line: 2,
          column: 5
        }
      ],
      path: ['findUser'],
      extensions: {
        id: '5',
        code: 'USER_ID_INVALID'
      }
    }
  ])
})

test('should return user', async t => {
  const server = buildServer()

  const query = `query {
    findUser(id: "1") {
        name
      }
    }`

  const response = await server.inject({
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    url: '/graphql',
    payload: JSON.stringify({ query })
  })

  t.equal(response.statusCode, 200)

  const { data, errors } = await response.json()

  t.equal(errors, undefined)
  t.strictSame(data, {
    findUser: {
      name: 'John'
    }
  })
})
