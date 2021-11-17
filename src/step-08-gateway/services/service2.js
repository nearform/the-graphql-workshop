import { posts } from '../data.js'

const service2 = {
  schema: `
  type Post @key(fields: "pid") {
    pid: ID!
    title: String
    content: String
    author: User @requires(fields: "pid title")
  }

  type Query @extends {
    topPosts(count: Int): [Post]
  }

  type User @key(fields: "id") @extends {
    id: ID! @external
    name: String @external
    posts: [Post]
    numberOfPosts: Int @requires(fields: "id name")
  }

  input PostInput {
    title: String!
    content: String!
    authorId: String!
  }
`,
  resolvers: {
    Post: {
      author: post => {
        return {
          __typename: 'User',
          id: post.authorId
        }
      }
    },
    User: {
      posts: user => {
        return Object.values(posts).filter(
          p => p.authorId === user.id
        )
      },
      numberOfPosts: user => {
        return Object.values(posts).filter(
          p => p.authorId === user.id
        ).length
      }
    },
    Query: {
      topPosts: (root, { count }) =>
        Object.values(posts).slice(0, count)
    }
  }
}

export { service2 }
