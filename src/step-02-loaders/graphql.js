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
