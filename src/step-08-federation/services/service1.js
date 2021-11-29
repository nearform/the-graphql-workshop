import { users } from '../data.js'

const service1 = {
  schema: `
  extend type Query {
    me: User
    hello: String
  }
  
  type User @key(fields: "id") {
    id: ID!
    name: String!
    fullName: String
    friends: [User]
  }
  `,
  resolvers: {
    Query: {
      me: () => {
        return users.u1
      },
      hello: () => 'World'
    },
    User: {
      __resolveReference: user => {
        return users[user.id]
      },
      friends: user => Object.values(users).filter(u => u.id !== user.id),
      fullName: user => user.name + ' Doe'
    }
  }
}

export { service1 }
