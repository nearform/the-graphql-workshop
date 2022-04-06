import { loadPets, ownersByPetNames } from './lib/db.js'

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
      const petNames = queries.map(({ obj }) => obj.name)
      return ownersByPetNames(context.app.pg, petNames)
    }
  }
}

export { schema, resolvers, loaders }
