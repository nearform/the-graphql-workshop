---
theme: slidev-theme-nearform
layout: default
highlighter: shiki
lineNumbers: false
---

<img class=logo src="/images/nearform.svg">

# The GraphQL Workshop

## A guide to doing GraphQL with Fastify and Mercurius

<div class="copyright">

© Copyright 2019-2022 NearForm Ltd. All Rights Reserved.

</div>

---

# Introduction: Why Mercurius

<div class="dense">

- Mercurius is a **high-performance** GraphQL adapter for the popular Fastify web framework
- It has many of features and plugins for building world class production-ready applications
- It provides a Just-In-Time compiler via graphql-jit and an **automatic loader integration** to avoid N + 1 queries
- Mercurius also supports the Apollo Federation specification out of the box

</div>

---

# Prerequisites

- This workshop requires an understanding of the Fastify framework.  
  Please go through the fastify workshop first.  
  Link - https://github.com/nearform/the-fastify-workshop

---

<div class="dense">

# Core features

- Caching of query parsing and validation
- Automatic loader integration to avoid 1 + N queries
- Just-In-Time compiler via graphql-jit
- Subscriptions
- Federation support
- Federated subscriptions support
- Gateway implementation, including Subscriptions
- Batched query support
- Customizable persisted queries

</div>

---

# Getting setup

## Requirements

- Node LTS
- npm >= 7

## Setup

```bash
git clone https://github.com/nearform/the-graphql-workshop
npm ci
```

---

<div class="middle-flex dense">

# Workshop structure

- This workshop is made of multiple, incremental modules
- Each module builds on top of the previous one
- At each step you are asked to add features and solve problems
- You will find the solution to each step in the `src/step-{n}-{name}` folder
- The 🏆 icon indicates bonus features
- The 💡 icon indicates hints

</div>

---

<div class="middle-flex">

# Running the modules

- `cd src/step-{n}-{name}`
- Check out README.md

#### Example

```bash
cd src/step-01-basic

npm run start
```

</div>

---

<div class="dense">

# Step 1: Basic 💻

Create a GraphQL server which exposes an `add` function to compute sum of two numbers.

- Exposes a GraphQL `POST /graphql` route
- Listens on port 3000
- Has a schema including an `add` query accepting parameters `x` and `y`
- Has a resolver for the `add` query
- Responds with the JSON object when invoked with `(x:5, y:3)`

```json
{
  "data": {
    "add": 8
  }
}
```

</div>

---

# Step 1: Solution

```js
const app = Fastify()

const schema = `
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
  schema,
  resolvers,
  graphiql: true
})

app.listen(3000)
```

---

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

<div class="dense">

# Step 2: Loaders 💻

- Create a `Human` type with `name` property
- Create a `Pet` type with `name` and `owner` property (of type `Human`)
- Exposes a `pets` query which returns all pets and, for each pet, its owner **using GraphQL loaders**

</div>

---

- The query should return a JSON object:

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

# Step 2: Solution

<div class="two-columns gap-5">

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
```

```js
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
```

</div>

---

<div class="middle-flex">

```js
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

</div>

---

<div class="middle-flex">

# Step 2: Trying it out

### In Graphiql:

You can navigate to graphql query editor on http://localhost:3000/graphiql

<img style="width: 50%; text-align: center" src="/images/step-02.jpg">

</div>

---

<div class="dense">

# Step 3: Executable schema 💻

- Create an executable schema using `typeDefs` and `resolvers`
- Use the `@graphql-tools/schema` package to create the executable schema
- Implement the same `add` functionality as in the earlier step

</div>

---

# Step 3: Solution

<div class="one-big-one-small-column gap-5">

```js
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
```

```js
app.register(mercurius, {
  schema: makeExecutableSchema({
    typeDefs,
    resolvers
  })
})

app.listen(3000)
```

</div>

---

<div class="dense">

# Step 4: SELECT N+1 problem 💻

- Implement the same Pet and Owners functionality as before
- Allows to query all pets and its owners by using GraphQL loaders
- Stores the pets and owners in postgres database
- Uses a **single database query** to get owners for all pets

</div>

---

# Step 4: Solution

<div class="two-columns gap-5">

```js
// lib/db.js
export async function ownersByPetNames(db, petNames) {
  const { rows } = await db.query(
    SQL`
      SELECT owners.*
      FROM owners
      INNER JOIN pets
        ON pets.owner = owners.id
        AND pets.name = ANY(${petNames})
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
      return ownersByPetNames(context.app.pg, pets)
    }
  }
}
```

</div>

---

<div class="dense">

# Step 5: Context 💻

- Create a `User` type with `name` and `locale` properties
- Create an in-memory array of `User` with different locales
- Create a query called `getUserByLocale` returning user with `en` locale
- Sets the property `locale: 'en'` in the mercurius context
- Response with JSON object:

```json
{
  "data": {
    "getUserByLocale": {
      "name": "Alice"
    }
  }
}
```

</div>

---

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

<div class="dense">

# Step 6: Hooks 💻

- Create a query called `sum` which returns the sum of two numbers
- Create and print logs for the following hooks:
  - `preParsing`
  - `preValidation`
  - `preExecution`
  - `onResolution`
- Enrich the response with an error with the message 'foo' along with the data in the `preExecution` hook

</div>

---

- Query should return:

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

  return {
    document,
    errors: [new Error('foo')]
  }
})

app.graphql.addHook('onResolution', async function () {
  app.log.info('onResolution called')
})
```

---

# Step 6: Trying it out

<div class="flex-row">

In terminal

```bash
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ add(x: 5, y:3) }"}'
```

</div>

Output

<div class="two-columns gap-5">

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

</div>

---

<div class="dense">

# Step 7: Error handling 💻

- Create `User` type with `name` and `id` property
- Create an in-memory array of users of type `User`
- Create a query `findUser` which accepts an `id` and
  - If the `id` matches then the corresponding user is returned
  - If the `id` does not match with any user then an error is thrown with the message `"Invalid User ID"`
- Add a property `extensions` to the error object with properties:
  - `code: USER_ID_INVALID`
  - `id: <query input>`
- 💡 Use Mercurius `ErrorWithProps` to create the error

</div>

---

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

# Step 7: Solution

```js
const resolvers = {
  Query: {
    findUser: (_, { id }) => {
      const user = users[id]

      if (user) {
        return users[id]
      }

      throw new ErrorWithProps('Invalid User ID', {
        id,
        code: 'USER_ID_INVALID'
      })
    }
  }
}
```

---

<div class="dense">

# Step 8: Federation 💻

- Create a Federated GraphQL gateway which listens on port 4000
- Run two GraphQL services on ports 4001 and 4002
- Service 1 has a `User` type and a `me` query which returns the user
- Service 2 has a `Post` type and extends `User` with a `posts` array which are the posts of that user
- Has an in-memory array of users of the type `User` and posts of type `Post`
- Expose the two services from the gateway

</div>

---

Query should return:

```json
{
  "data": {
    "me": {
      "name": "John",
      "posts": [
        {
          "id": "p1",
          "title": "Post 1",
          "content": "Content 1"
        },
        {
          "id": "p3",
          "title": "Post 3",
          "content": "Content 3"
        }
      ]
    }
  }
}
```

---

# Step 8: Solution

<div class="one-big-one-small-column gap-5">

```js
async function start() {
  await createService(4001, service1.schema, service1.resolvers)
  await createService(4002, service2.schema, service2.resolvers)

  const gateway = Fastify({ logger: { prettyPrint: true } })
  gateway.register(mercurius, {
    graphiql: true,
    jit: 1,
    gateway: {
      services: [
        { name: 'user', url: 'http://localhost:4001/graphql' },
        { name: 'post', url: 'http://localhost:4002/graphql' }
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

> 💡 see service1 and service2 implementations in the repo

</div>

---

# Step 9: Variables 💻

<div class="dense">

- Implement `add` functionality as before
- The `add` function is supplied ith dynamic parameters<br/>`($x: Int!, $y: Int!)`
- The inputs to the `add` function should be passed as query variables, e.g <br/>`{ "x": 3, "y": 5 }`
- Query should return:

```json
{
  "data": {
    "add": 8
  }
}
```

</div>

---

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

<div class="middle-flex">

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

</div>

---

<div class="dense">

# Step 10: Fragments 💻

Create a GraphQL server using mercurius which:

- Has `User` type with `id`, `name`, `age` and `level` properties
- Has two Query methods named `getNoviceUsers` and `getAdvancedUsers` which return type `User`
  - `getNoviceUsers` query returns users with `level: novice`
  - `getAdvancedUsers` query returns users with `level: advanced`
- Query both methods using a fragment on the type `User`

</div>

---

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

# Step 10: Solution

<div class="middle-flex">

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

</div>

---

<div class="middle-flex">

# Step 10: Trying it out

### In terminal

```bash
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ getNoviceUsers { ...userFields } getAdvancedUsers { ...userFields } } fragment userFields on User { id  name age level }"}'
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

</div>

---

<div class="middle-flex">

# 🏆 Write Tests 🏆

> 💡 inspire from the code in the completed steps

</div>

---

<div class="middle-flex big">

# Thanks For Having Us!

## 👏👏👏

<img class=logo-bottom src="/images/nearform.svg">

</div>
