class: center, title-page

# The GraphQL Workshop

---

class: branded

# Introduction: Why Mercurius

- TODO

---

class: branded

# Core features

- Caching of query parsing and validation
- Automatic loader integration to avoid 1 + N queries
- Just-In-Time compiler via graphql-jit
- Subscriptions
- Federation support
- Federated subscriptions support
- Gateway implementation, including Subscriptions
- Batched query support
- Customisable persisted queries

---

# Getting setup

#### Requirements

- Node LTS
- npm >= 7

#### Setup

```bash
git clone https://github.com/nearform/the-graphql-workshop
npm ci
```

---

class: branded

# Workshop structure

- This workshop is made of multiple, incremental modules

- Each module builds on top of the previous one

- At each step you are asked to add features and solve problems

- You will find the solution to each step in the `src/step-{n}-{name}` folder

- The 🏆 icon indicates bonus features

- The 💡 icon indicates hints

---

class: branded

# Running the modules

- `cd src/step-{n}-{name}`

- Check out README.md

#### Example

```bash
cd src/step-01-basic

npm run start
```

---

class: branded

# Step 1: Exercise 💻

Write a basic graphql query which exposes an add function to return
sum of two numbers in `server.js` file which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Responds with the JSON object if add function supplied with parameters (x:5, y:3)

```json
{
  "data": {
    "add": 8
  }
}
```

---

class: branded

# Step 1: Solution

```js
// server.js
'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')

const app = Fastify()

const schema = `
  type Query {
    add(x: Int, y: Int): Int
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

app.register(mercurius, {
  schema,
  resolvers,
  graphiql: true
})

app.listen(3000)

```

---

class: branded

# Step 1: Trying it out

### In the terminal:

```a
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ add(x: 5, y:3) }"}'

{
  "data": {
    "add": 8
  }
}
```

---

class: branded

# Step 2: Exercise 💻

Write a graphql query in `server.js` file which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Has `Human` type with `name` property
- Has `Dog` type with `name` and `owner`(Human) property
- Allows to query all dogs and it's owners by using graphql loaders
- Responds with the JSON object

```json
{
  "data": {
    "dogs": [
      {
        "owner": {
          "name": "Jennifer"
        }
      },
      {
        "owner": {
          "name": "Sarah"
        }
      }
    ]
  }
}
```

---

class: branded

# Step 2: Solution

```js
// server.js
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
  loaders
})

app.listen(3000)
```

---

class: branded

# Step 2: Trying it out

### In Graphiql:
You can navigate to graphql query editor on http://localhost:3000/graphiql

<img style="width: 50%; text-align: center" src="assets/step-02.png">

---

class: branded

# Step 3: Exercise 💻

Create a graphql server using mercurius in `server.js` file which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Creates a GraphQL query to add two numbers and write resolvers
- Creates an executable schema using typeDefs and resolves and supplies it to mercurius
- Responds with the JSON object if add function is supplied with parameters (x:5, y:3)

```json
{
  "data": {
    "add": 8
  }
}
```
---

class: branded

# Step 3: Solution

```js
// server.js
'use strict'

const Fastify = require('fastify')
const mercurius = require('mercurius')
const { makeExecutableSchema } = require('@graphql-tools/schema')

const app = Fastify()

const typeDefs = `
  type Query {
    add(x: Int, y: Int): Int
  }
`

const resolvers = {
  Query: {
    add: async (_, { x, y }) => x + y
  }
}

app.register(mercurius, {
  schema: makeExecutableSchema({ typeDefs, resolvers })
})

app.listen(3000)
```

---

class: branded

### In the terminal:

```a
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ add(x: 5, y:3) }"}'

{
  "data": {
    "add": 8
  }
}
```

---

