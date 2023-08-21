import t from 'tap'
import { createService } from '../services/service.js'
import { service1 } from '../services/service1.js'
import { service2 } from '../services/service2.js'
import buildGateway from '../index.js'

const query = `
{
  me {
    name
    posts {
      title
      author {
        name
      }
    }
  }
}`

let userService
let postService
let gateway

t.before(async () => {
  userService = await createService(4001, service1.schema, service1.resolvers)
  postService = await createService(4002, service2.schema, service2.resolvers)
  gateway = buildGateway()
})

t.teardown(async () => {
  await gateway.close()
  await postService.close()
  await userService.close()
})

t.test(
  'Runs in gateway mode with two services and no X-Role header',
  async t => {
    const res = await gateway.inject({
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      url: '/graphql',
      payload: JSON.stringify({ query })
    })

    t.same(JSON.parse(res.body), {
      data: {
        me: null
      },
      errors: [
        {
          message: 'Failed auth policy check on me',
          locations: [
            {
              line: 3,
              column: 3
            }
          ],
          path: ['me']
        }
      ]
    })
  }
)

t.test(
  'Runs in gateway mode with two services with X-Role: VERIFIED',
  async t => {
    const res = await gateway.inject({
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-Role': 'VERIFIED'
      },
      url: '/graphql',
      payload: JSON.stringify({ query })
    })

    t.same(JSON.parse(res.body), {
      data: {
        me: {
          name: 'John',
          posts: [
            {
              title: 'Post 1',
              author: null
            },
            {
              title: 'Post 3',
              author: null
            }
          ]
        }
      },
      errors: [
        {
          message: 'Failed auth policy check on author',
          locations: [
            {
              line: 7,
              column: 7
            }
          ],
          path: ['me', 'posts', '0', 'author']
        },
        {
          message: 'Failed auth policy check on author',
          locations: [
            {
              line: 7,
              column: 7
            }
          ],
          path: ['me', 'posts', '1', 'author']
        }
      ]
    })
  }
)

t.test('Runs in gateway mode with two services with X-Role: ADMIN', async t => {
  const res = await gateway.inject({
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-Role': 'ADMIN'
    },
    url: '/graphql',
    payload: JSON.stringify({ query })
  })

  t.same(JSON.parse(res.body), {
    data: {
      me: {
        name: 'John',
        posts: [
          {
            title: 'Post 1',
            author: {
              name: 'John'
            }
          },
          {
            title: 'Post 3',
            author: {
              name: 'John'
            }
          }
        ]
      }
    }
  })
})

t.test(
  'Runs in gateway mode with two services with X-Role: UNKNOWN',
  async t => {
    const res = await gateway.inject({
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-Role': 'UNKNOWN'
      },
      url: '/graphql',
      payload: JSON.stringify({ query })
    })

    t.same(JSON.parse(res.body), {
      data: {
        me: null
      },
      errors: [
        {
          message: 'Failed auth policy check on me',
          locations: [
            {
              line: 3,
              column: 3
            }
          ],
          path: ['me']
        }
      ]
    })
  }
)
