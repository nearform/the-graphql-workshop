class: center, title-page

# The GraphQL Workshop

---

class: branded

# Introduction: Why Mercurius

- Mercurius is a high-performance GraphQL adapter for the popular Fastify web framework.
  It has lots of features and plugins for building world class production-ready applications.

- It provides a Just-In-Time compiler via graphql-jit and an automatic loader integration to avoid N + 1 queries.  
  Mercurius also supports the Apollo Federation specification out of the box.

---

class: branded

# Pre-requisites

- This workshop requires an understanding of the Fastify framework.  
  Please go through the fastify workshop first.  
  Link - https://github.com/nearform/the-fastify-workshop

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
sum of two numbers which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Has schema which includes an `add` function that returns sum of two numbers
- Has a resolver for the add function that returns the sum
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

```bash
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ add(x: 5, y:3) }"}'
```

```json
{
  "data": {
    "add": 8
  }
}
```

---

class: branded

# Step 2: Exercise 💻

Write a graphql query which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Has `Human` type with `name` property
- Has `Pet` type with `name` and `owner`(Human) property
- Allows to query all pets and it's owners by using graphql loaders
- Responds with the JSON object

---

class: branded

Query should return:

```json
{
  "data": {
    "pets": [
      {
        "owner": {
          "name": "Jennifer"
        }
      },
      {
        "owner": {
          "name": "Simon"
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

const app = Fastify()

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
```

---

class: branded

```js
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

Create a graphql server using mercurius which:

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

# Step 3: Trying it out

### In the terminal:

```bash
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ add(x: 5, y:3) }"}'
```

```json
{
  "data": {
    "add": 8
  }
}
```

---

class: branded

# Step 4: Exercise 💻

Create a graphql server using mercurius which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Has `Human` type with `name` property
- Has `Pet` type with `name` and `owner`(Human) property
- Allows to query all pets and it's owners by using graphql loaders
- Stores the pets and owners in postgres database
- Uses single database call to get owners for all pets

---

class: branded

Query shoud return:

```json
{
  "data": {
    "pets": [
      {
        "owner": {
          "name": "Jennifer"
        }
      },
      {
        "owner": {
          "name": "Simon"
        }
      }
    ]
  }
}
```

---

class: branded

# Step 4: Solution

```js
// lib/db.js
export async function ownersByName(db, names) {
  const { rows } = await db.query(
    SQL`
      SELECT o.name
      FROM owners o
      INNER JOIN pets p
        ON p.owner = o.id
        AND p.name = ANY(${names})
    `
  )

  return rows
}
```

```js
// graphql.js
const loaders = {
  Pet: {
    async owner(queries, context) {
      const pets = queries.map(({ obj }) => obj.name)
      return ownersByName(context.app.pg, pets)
    }
  }
}
```

---

class: branded

# Step 4: Trying it out

### In Graphiql:

You can navigate to graphql query editor on http://localhost:3000/graphiql

<img style="width: 50%; text-align: center" src="assets/step-02.png">

---

class: branded

# Step 5: Exercise 💻

Create a graphql server using mercurius which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Has `User` type with `name` and `locale` property
- Has a query called `getUserByLocale` which returns user having `en` locale
- Sets the property `locale: 'en'` in the mercurius context

```json
{
  "data": {
    "getUserByLocale": {
      "name": "Alice"
    }
  }
}
```

---

class: branded

# Step 5: Solution

```js
// server.js

const app = Fastify()

app.register(mercurius, {
  schema,
  resolvers,
  context: () => ({
    locale: 'en'
  })
})
```

```js
// graphql.js

const resolvers = {
  Query: {
    getUserByLocale(_, __, context) {
      return users.find(u => u.locale === context.locale)
    }
  }
}
```

---

class: branded

# Step 5: Trying it out

### In terminal:

```bash
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ getUserByLocale { name } }"}'
```

```json
{
  "data": {
    "getUserByLocale": {
      "name": "Alice"
    }
  }
}
```

---

# Step 6: Exercise 💻

Create a graphql server using mercurius which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Has a query called `sum` which returns sum of two numbers
- Creates and logs the following hooks
  - preParsing
  - preValidation
  - preExecution
  - onResolution
- Returns an error with the message 'foo' along with the data

---

class: branded

Query should return:

```json
{
  "data": {
    "add": 10
  },
  "errors": [
    {
      "message": "foo"
    }
  ]
}
```

---

class: branded

# Step 6: Solution

```js
// server.js

app.graphql.addHook('preParsing', async function () {
  app.log.info('preParsing called')
})

app.graphql.addHook('preValidation', async function () {
  app.log.info('preValidation called')
})

app.graphql.addHook('preExecution', async function (schema, document) {
  app.log.info('preExecution called')
})

app.graphql.addHook('onResolution', async function () {
  app.log.info('onResolution called')
})
```

---

class: branded

# Step 6: Trying it out

### In terminal:

```bash
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ add(x: 5, y:3) }"}'
```

Output:

```bash
preParsing called
preValidation called
preExecution called
onResolution called
```

```json
{
  "data": {
    "add": 10
  },
  "errors": [
    {
      "message": "foo"
    }
  ]
}
```

---

# Step 7: Exercise 💻

Create a graphql server using mercurius which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Has `User` type with `name` and `id` property
- Has a predefined list of users of the type `User`
- Has a query called `findUser` which accepts an `id` and
  - If the `id` matches then the corresponding user is returned
  - If the `id` does not match with any user then an error is thrown with the message 'Invalid User ID'
  - Also add a property `extensions` to the error object with the `code: USER_ID_INVALID` and `id: <query input>`

---

class: branded

Query should return:

```json
{
  "data": {
    "findUser": null
  },
  "errors": [
    {
      "message": "Invalid User ID",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["findUser"],
      "extensions": {
        "code": "USER_ID_INVALID",
        "id": "5"
      }
    }
  ]
}
```

---

class: branded

# Step 7: Solution

```js
const resolvers = {
  Query: {
    findUser: (_, { id }) => {
      const user = users[id]
      if (user) {
        return users[id]
      } else {
        throw new ErrorWithProps('Invalid User ID', {
          id,
          code: 'USER_ID_INVALID'
        })
      }
    }
  }
}
```

---

class: branded

# Step 7: Trying it out

### In terminal:

```bash
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ findUser (id: \"5\") { id, name } }"}'
```

```json
{
  "data": {
    "findUser": null
  },
  "errors": [
    {
      "message": "Invalid User ID",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": ["findUser"],
      "extensions": {
        "code": "USER_ID_INVALID",
        "id": "5"
      }
    }
  ]
}
```

---

# Step 8: Exercise 💻

Create a graphql server using mercurius which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 4000
- Run two graphql services on ports 4001 and 4002
- Service 1 has a `User` type and a query which returns the user
- Service 2 has a `Post` type and a query which returns the top posts by a `User`
- Has a predefined list of users of the type `User` and posts of type `Post`

---

class: branded

Query should return:

```json
{
  "data": {
    "me": {
      "name": "John",
      "numberOfPosts": 2
    }
  }
}
```

```json
{
  "data": {
    "topPosts": [
      {
        "title": "Post 1"
      }
    ]
  }
}
```

---

class: branded

# Step 8: Solution

```js
// server.js
async function start() {
  await createService(4001, service1.schema, service1.resolvers)

  await createService(4002, service2.schema, service2.resolvers)

  const gateway = Fastify({
    logger: {
      prettyPrint: true
    }
  })
  gateway.register(mercurius, {
    graphiql: true,
    jit: 1,
    gateway: {
      services: [
        {
          name: 'user',
          url: 'http://localhost:4001/graphql'
        },
        {
          name: 'post',
          url: 'http://localhost:4002/graphql'
        }
      ]
    }
  })

  await gateway.listen(4000)
}
```

```js
// service.js
service.register(mercurius, {
  schema,
  resolvers,
  federationMetadata: true,
  graphiql: true,
  jit: 1
})
```

---

class: branded

# Step 8: Trying it out

### In terminal:

```bash
curl --request POST \
  --url http://localhost:4000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ me { name, numberOfPosts } }"}'
```

```bash
curl --request POST \
  --url http://localhost:4000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ topPosts(count: 1) { title } }"}'
```

---

class: branded

##### Responses:

```json
{
  "data": {
    "me": {
      "name": "John",
      "numberOfPosts": 2
    }
  }
}
```

```json
{
  "data": {
    "topPosts": [
      {
        "title": "Post 1"
      }
    ]
  }
}
```

---

# Step 9: Exercise 💻

Create a graphql server using mercurius which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Has schema which includes an `add` function that returns sum of two numbers
- Has a resolver for the add function that returns the sum
- Returns result if add function supplied with dynamic parameters `($x: Int!, $y: Int!)`
- inputs to add function should be passed as variables `{ "x": 3, "y": 5 }`

---

class: branded

Query should return:

```json
{
  "data": {
    "me": {
      "name": "John",
      "numberOfPosts": 2
    }
  }
}
```

---

class: branded

# Step 9: Solution

```js
const schema = `
  type Query {
    add(x: Int, y: Int): Int
  }
`

const resolvers = {
  add: async ({ x, y }) => x + y
}
```

---

class: branded

# Step 9: Trying it out

### In terminal:

```bash
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"query AddQuery ($x: Int!, $y: Int!) { add(x: $x, y: $y) }","variables":{"x":3,"y":5},"operationName":"AddQuery"}'
```

```json
{
  "data": {
    "add": 8
  }
}
```

---

# Step 10: Exercise 💻

Create a graphql server using mercurius which:

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Has `User` type with `id`, `name`, `age` and `level` properties
- Has two Query methods named `getNoviceUsers` and `getAdvancedUsers` which return type `User`
- `getNoviceUsers` query returns users with level=novice
- `getAdvancedUsers` query returns users with level=advanced
- Query both methods using a fragment on the type `User`

---

class: branded

Query should return:

```json
{
  "data": {
    "getNoviceUsers": [
      {
        "id": 1,
        "name": "John Doe",
        "age": 32,
        "level": "novice"
      }
    ],
    "getAdvancedUsers": [
      {
        "id": 2,
        "name": "Jane Doe",
        "age": 28,
        "level": "advanced"
      }
    ]
  }
}
```

---

class: branded

# Step 10: Solution

```js
const schema = `
  type User {
    id: Int!
    name: String!
    age: Int!
    level: String!
  }

  type Query {
    getNoviceUsers: [User]
    getAdvancedUsers: [User]
  }
`

const resolvers = {
  Query: {
    getNoviceUsers() {
      return users.filter(user => user.level === 'novice')
    },
    getAdvancedUsers() {
      return users.filter(user => user.level === 'advanced')
    }
  }
}
```

---

class: branded

# Step 10: Trying it out

### In terminal:

```bash
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ getNoviceUsers { ...userFields } getAdvancedUsers { ...userFields } } fragment userFields on User { id  name age level }","variables":{"x":3,"y":5}}'
```

```json
{
  "data": {
    "getNoviceUsers": [
      {
        "id": 1,
        "name": "John Doe",
        "age": 32,
        "level": "novice"
      }
    ],
    "getAdvancedUsers": [
      {
        "id": 2,
        "name": "Jane Doe",
        "age": 28,
        "level": "advanced"
      }
    ]
  }
}
```

---

class: center, no-border, branded

# 🏆 Write Tests 🏆

> 💡 inspire from the code in the completed steps

---

class: center, no-border, branded

# Thanks For Having Us!

## 👏👏👏
