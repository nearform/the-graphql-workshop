import { test } from 'tap'
import { createService } from '../services/service.js'
import { service1 } from '../services/service1.js'
import { service2 } from '../services/service2.js'
import buildGateway from '../index.js'

test('Runs in gateway mode with two services ', async t => {
  const userService = await createService(
    4001,
    service1.schema,
    service1.resolvers
  )

  const postService = await createService(
    4002,
    service2.schema,
    service2.resolvers
  )

  const gateway = buildGateway()

  t.teardown(async () => {
    await gateway.close()
    await postService.close()
    await userService.close()
  })

  const query = `
  query {
    me {
      id
      name
      posts {
        ...PostFragment
      }
    }
  }
  fragment UserFragment on User {
    id
    name
  }
  fragment PostFragment on Post {
    id
    title
    content
    ...AuthorFragment
  }
  
  fragment AuthorFragment on Post {
    author {
      ...UserFragment
    }
  }`
  const res = await gateway.inject({
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: 'bearer supersecret'
    },
    url: '/graphql',
    payload: JSON.stringify({
      query,
      variables: {
        count: 1
      }
    })
  })

  t.same(JSON.parse(res.body), {
    data: {
      me: {
        id: 'u1',
        name: 'John',
        posts: [
          {
            id: 'p1',
            title: 'Post 1',
            content: 'Content 1',
            author: {
              id: 'u1',
              name: 'John'
            }
          },
          {
            id: 'p3',
            title: 'Post 3',
            content: 'Content 3',
            author: {
              id: 'u1',
              name: 'John'
            }
          }
        ]
      }
    }
  })
})
