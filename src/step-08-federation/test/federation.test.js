import { test } from 'tap'
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { createService } from '../services/service.js'
import { service1 } from '../services/service1.js'
import { service2 } from '../services/service2.js'

test('Runs in gateway mode with two services ', async t => {
  const [userService, userServicePort] = await createService(
    4001,
    service1.schema,
    service1.resolvers
  )

  const [postService, postServicePort] = await createService(
    4002,
    service2.schema,
    service2.resolvers
  )

  const gateway = Fastify()

  t.teardown(async () => {
    await gateway.close()
    await postService.close()
    await userService.close()
  })
  gateway.register(mercurius, {
    gateway: {
      services: [
        {
          name: 'user',
          url: `http://localhost:${userServicePort}/graphql`,
          rewriteHeaders: headers => {
            if (headers.authorization) {
              return {
                authorization: headers.authorization
              }
            }
          }
        },
        {
          name: 'post',
          url: `http://localhost:${postServicePort}/graphql`
        }
      ]
    }
  })

  const query = `
  query MainQuery(
    $count: Int
  ) {
    me {
      id
      name
      friends {
        ...UserFragment
        friends {
          ...UserFragment
        }
      }
      posts {
        ...PostFragment
      }
      numberOfPosts
    }
    topPosts(count: $count) {
      ...PostFragment
    }
    hello
  }
  fragment UserFragment on User {
    id
    name
    numberOfPosts
    fullName
  }
  fragment PostFragment on Post {
    pid
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
        friends: [
          {
            id: 'u2',
            name: 'Jane',
            numberOfPosts: 2,
            fullName: 'Jane Doe',
            friends: [
              {
                id: 'u1',
                name: 'John',
                numberOfPosts: 2,
                fullName: 'John Doe'
              },
              {
                id: 'u3',
                name: 'Jack',
                numberOfPosts: 0,
                fullName: 'Jack Doe'
              }
            ]
          },
          {
            id: 'u3',
            name: 'Jack',
            numberOfPosts: 0,
            fullName: 'Jack Doe',
            friends: [
              {
                id: 'u1',
                name: 'John',
                numberOfPosts: 2,
                fullName: 'John Doe'
              },
              {
                id: 'u2',
                name: 'Jane',
                numberOfPosts: 2,
                fullName: 'Jane Doe'
              }
            ]
          }
        ],
        posts: [
          {
            pid: 'p1',
            title: 'Post 1',
            content: 'Content 1',
            author: {
              id: 'u1',
              name: 'John',
              numberOfPosts: 2,
              fullName: 'John Doe'
            }
          },
          {
            pid: 'p3',
            title: 'Post 3',
            content: 'Content 3',
            author: {
              id: 'u1',
              name: 'John',
              numberOfPosts: 2,
              fullName: 'John Doe'
            }
          }
        ],
        numberOfPosts: 2
      },
      topPosts: [
        {
          pid: 'p1',
          title: 'Post 1',
          content: 'Content 1',
          author: {
            id: 'u1',
            name: 'John',
            numberOfPosts: 2,
            fullName: 'John Doe'
          }
        }
      ],
      hello: 'World'
    }
  })
})
