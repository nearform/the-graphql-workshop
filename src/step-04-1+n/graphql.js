import { loadPets, ownersByName } from './lib/db.js'

const schema = `
  type Human {
    name: String!
  }

  type Pet {
    name: String!
    owner: Human
  }

  type Query {
    pets: [Pet]
  }
`

const resolvers = {
  Query: {
    pets(_, __, context) {
      return loadPets(context.app.pg)
    }
  }
}

const loaders = {
  Pet: {
    async owner(queries, context) {
      const pets = queries.map(({ obj }) => obj.name)
      return ownersByName(context.app.pg, pets)
    }
  }
}

export { schema, resolvers, loaders }
