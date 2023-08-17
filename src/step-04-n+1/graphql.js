import { loadPets, ownersByPetNames } from './lib/db.js'

const schema = `
  type Person {
    name: String!
  }

  type Pet {
    name: String!
    owner: Person
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
      const owners = await ownersByPetNames(context.app.pg, petNames)
      return queries.map(({ obj: pet }) =>
        owners.find(owner => owner.id === pet.owner)
      )
    }
  }
}

export { schema, resolvers, loaders }
