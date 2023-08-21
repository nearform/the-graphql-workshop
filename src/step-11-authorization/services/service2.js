import { posts } from '../data.js'

const service2 = {
  schema: `
  enum Role {
    ADMIN
    VERIFIED
  }

  directive @auth(role: Role) on OBJECT | FIELD_DEFINITION

  type Post @key(fields: "id") {
    id: ID!
    title: String
    content: String
    author: User @auth(role: ADMIN)
  }

  type User @key(fields: "id") @extends {
    id: ID! @external
    name: String @external
    posts: [Post]
  }`,
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
        return Object.values(posts).filter(p => p.authorId === user.id)
      }
    }
  }
}

export { service2 }
