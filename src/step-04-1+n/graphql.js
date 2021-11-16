import { loadDogs, ownersByName } from './lib/db.js'

const schema = `
  type Human {
    name: String!
  }

  type Dog {
    name: String!
    owner: Human
  }

  type Query {
    dogs: [Dog]
  }
`

const resolvers = {
  Query: {
    dogs(_, __, context) {
      return loadDogs(context.app.pg)
    }
  }
}

const loaders = {
  Dog: {
    async owner(queries, context) {
      const dogs = queries.map(({ obj }) => obj.name)
      return ownersByName(context.app.pg, dogs)
    }
  }
}

export { schema, resolvers, loaders }
