'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')

const app = Fastify()

const dogs = [{
  name: 'Max'
}, {
  name: 'Charlie'
}]

const owners = {
  Max: {
    name: 'Jennifer'
  },
  Charlie: {
    name: 'Sarah'
  }
}

const schema = `
  type Human {
    name: String!
  }

  type c {
    name: String!
    owner: Human
  }

  type Query {
    dogs: [Dog]
  }
`

const resolvers = {
  Query: {
    dogs () {
      return dogs
    }
  }
}

const loaders = {
  Dog: {
    async owner (queries) {
      return queries.map(({ obj }) => owners[obj.name])
    }
  }
}

app.register(mercurius, {
  schema,
  resolvers,
  loaders,
  graphiql: true
})

app.listen(3000)
