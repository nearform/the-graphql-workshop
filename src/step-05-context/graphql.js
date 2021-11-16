const users = [
  {
    id: 1,
    name: 'Alice',
    locale: 'en'
  },
  {
    id: 2,
    name: 'Bob',
    locale: 'de'
  },
  {
    id: 3,
    name: 'Johnny',
    locale: 'da'
  }
]

const schema = `
  type User {
    id: Int!
    name: String!
  }

  type Query {
    getUserByLocale: User
  }
`

const resolvers = {
  Query: {
    getUserByLocale(_, __, context) {
      return users.find(u => u.locale === context.locale)
    }
  }
}

export { schema, resolvers }
