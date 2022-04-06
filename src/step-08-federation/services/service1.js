import { users } from '../data.js'

const service1 = {
  schema: `
  extend type Query {
    me: User
  }
  
  type User @key(fields: "id") {
    id: ID!
    name: String!
  }
  `,

  resolvers: {
    Query: {
      me: () => {
        return users.u1
      }
    },
    User: {
      __resolveReference: user => {
        return users[user.id]
      }
    }
  }
}

export { service1 }
