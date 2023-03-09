const schema = `
  type Query {
    add(x: Int!, y: Int!): Int
  }
`

const resolvers = {
  Query: {
    add: async (_, obj) => {
      const { x, y } = obj
      return x + y
    }
  }
}

export { schema, resolvers }
