import { users } from '../data.js'

const service1 = {
  schema: `
  enum Role {
    ADMIN
    VERIFIED
  }

  directive @auth(role: Role) on OBJECT | FIELD_DEFINITION

  extend type Query {
    me: User @auth(role: VERIFIED)
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
