const pets = [
  {
    name: 'Max'
  },
  {
    name: 'Charlie'
  }
]

const owners = {
  Max: {
    name: 'Jennifer'
  },
  Charlie: {
    name: 'Simon'
  }
}

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
    pets() {
      return pets
    }
  }
}

const loaders = {
  Pet: {
    async owner(queries) {
      return queries.map(({ obj: pet }) => owners[pet.name])
    }
  }
}

export { schema, resolvers, loaders }
