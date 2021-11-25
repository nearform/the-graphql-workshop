const users = [
  {
    id: 1,
    name: 'John Doe',
    age: 32,
    level: 'novice'
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 28,
    level: 'advanced'
  }
]

const schema = `
  type User {
    id: Int!
    name: String!
    age: Int!
    level: String!
  }

  type Query {
    getNoviceUsers: [User]
    getAdvancedUsers: [User]
  }
`

const resolvers = {
  Query: {
    getNoviceUsers() {
      return users.filter(user => user.level === 'novice')
    },
    getAdvancedUsers() {
      return users.filter(user => user.level === 'advanced')
    }
  }
}

export { schema, resolvers }
