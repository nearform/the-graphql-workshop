---
theme: slidev-theme-nearform
layout: default
highlighter: shiki
lineNumbers: false
---

<img class=logo src="/images/nearform.svg">

# The GraphQL Workshop

### **A guide to GraphQL with Fastify and Mercurius**

<div class="copyright">

<Copyright />

</div>

---

# Why Mercurius

<div class="dense">

- [Mercurius](https://mercurius.dev/) is a **high-performance** GraphQL adapter for the [Fastify](https://www.fastify.io/) web framework
- It has many core features and plugins for building world class production-ready applications
- It supports advanced features out of the box such as [Apollo Federation specification](https://www.apollographql.com/docs/federation/federation-spec/) and Subscriptions
- It's entirely **Open Source** and made available under the MIT license
- It has a rich and vibrant community contributing to its development

</div>

---

# Prerequisites

<div class="dense">

- This workshop requires an understanding of the **Fastify** framework.

  - We recommend a basic knowledge of the Fastify plugin system which can be acquired by following a workshop similar to this one, focused on Fastify: https://github.com/nearform/the-fastify-workshop

- A basic grasp on how to write **GraphQL queries** so you can check your working via curl or [graphiql](https://graphql-dotnet.github.io/docs/getting-started/graphiql/) (a browser based GraphQL IDE).
  - We recommend the [GraphQL queries documentation](https://graphql.org/learn/queries/)

</div>

---

<div class="dense">

# Mercurius core features

- **Caching** of query parsing and validation
- Automatic **loader** integration to avoid the N+1 problem
- Just-In-Time compiler via graphql-jit
- **Subscriptions**
- **Federation** support
- Federated subscriptions support
- Gateway implementation, including Subscriptions
- **Batched** query support
- Customizable persisted queries

</div>

---

# Getting setup

<div class="dense">

Clone the repository:

```bash
git clone https://github.com/nearform/the-graphql-workshop
```

Follow the instructions in the [README](https://github.com/nearform/the-graphql-workshop) file

💡 Ask if anything doesn't work!

</div>

---

<div class="dense">

# Workshop structure

- This workshop is made of multiple, incremental modules
- Each module builds on top of the previous one
- At each step you are asked to add features and solve problems
- You will find the solution to each step in the `src/step-{n}-{name}` folder
- The 🏆 icon indicates bonus features
- The 💡 icon indicates hints

</div>

---

<div class="dense">

# Running the modules

- `cd src/step-{n}-{name}`
- Check out the README file in each step

#### Example

```bash
cd src/step-01-basic

npm start
```

</div>

---

<div class="dense">

# Step 1: Basic 💻

Create a GraphQL server which exposes an `add` function to compute the sum of two numbers.

- Expose a GraphQL `POST /graphql` route
- Listen on port 3000
- Create a schema including an `add` Query accepting parameters `x` and `y`
- Implement a resolver for the `add` query
- Respond with the JSON object when invoked with `(x:5, y:3)`

```json
{
  "data": {
    "add": 8
  }
}
```

</div>

---

# Step 1: Solution / 1

```js
// index.js
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers } from './graphql.js'

export default function buildServer() {
  const server = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty'
      }
    }
  })

  server.register(mercurius, {
    schema,
    resolvers,
    graphiql: true
  })

  return server
}
```

---

# Step 1: Solution / 2

```js
// graphql.js
const schema = `
  type Query {
    add(x: Int!, y: Int!): Int
  }
`

const resolvers = {
  Query: {
    add: async (_, { x, y }) => x + y
  }
}

export { schema, resolvers }
```

```js
// server.js
import buildServer from './index.js'

const app = buildServer()

app.listen({ port: 3000 })
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

A loader is an utility to avoid the N+1 query problem of GraphQL. Each defined loader will register a resolver that coalesces each of the request and combines them into a single, bulk query.

Moreover, it can also cache the results, so that other parts of the GraphQL do not have to fetch the same data.

- Create a `Person` type with `name` property
- Create a `Pet` type with `name` and `owner` property (of type `Person`)
- Expose a `pets` query which returns all pets and, for each pet, its owner, using **GraphQL loaders**

</div>

---

<div class="dense">

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

</div>

---

# Step 2: Solution / 1

```js
// index.js
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { schema, resolvers, loaders } from './graphql.js'

export default function buildServer() {
  const server = Fastify(...)

  server.register(mercurius, {
    schema,
    resolvers,
    loaders,
    graphiql: true
  })

  return server
}
```

---

# Step 2: Solution / 2

<div class="two-columns gap-5">

```js
// graphql.js
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
```

</div>

---

# Step 2: Solution / 3

```js
// graphql.js (cont.)
const loaders = {
  Pet: {
    async owner(queries) {
      return queries.map(({ obj: pet }) => owners[pet.name])
    }
  }
}

export { schema, resolvers, loaders }
```

---

# Step 2: Trying it out

### In Graphiql

You can navigate to graphql query editor on http://localhost:3000/graphiql

<img style="width: 50%; text-align: center" src="/images/step-02.jpg">

---

<div class="dense">

# Step 3: Executable schema 💻

The `@graphql-tools/schema` package allows you to create a GraphQL.js [GraphQLSchema](https://graphql.org/graphql-js/type/) instance from GraphQL schema language using the function `makeExecutableSchema`.

Besides common options such as `typeDefs` and `resolvers`, it supports more advanced options to customize the creation of the schema.

- Create an executable schema using `typeDefs` and `resolvers`
- Use the `@graphql-tools/schema` package to create the executable schema
- Implement the same "add" functionality as in the earlier step

</div>

---

# Step 3: Solution

<div class="one-big-one-small-column gap-5">

```js
// index.js
import Fastify from 'fastify'
import mercurius from 'mercurius'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { typeDefs, resolvers } from './graphql.js'

export default function buildServer() {
  const server = Fastify(...)

  server.register(mercurius, {
    schema: makeExecutableSchema({ typeDefs, resolvers })
  })

  return server
}
```

```js
// graphql.js
const typeDefs = `
  type Query {
    add(x: Int!, y: Int!): Int
  }
`

const resolvers = {
  Query: {
    add: async (_, { x, y }) => x + y
  }
}

export { typeDefs, resolvers }
```

</div>

---

<div class="dense">

# Step 4: SELECT N+1 💻

- Implement the same Pet and Owners functionality as before
- Allows to query all pets and its owners by using GraphQL loaders
- Stores the pets and owners in postgres database
- Uses a **single database query** to get owners for all pets

</div>

---

# Step 4: Solution

<div class="two-columns gap-5">

```js
export async function ownersByPetNames(db, petNames) {
  const { rows } = await db.query(
    SQL`
      SELECT owners.*
      FROM owners
      INNER JOIN pets
        ON pets.owner = owners.id
        AND pets.name = ANY(${petNames})
      ORDER BY
        ARRAY_POSITION((${petNames}), pets.name)`
    `
  )

  return rows
}
```

```js
const loaders = {
  Pet: {
    async owner(queries, context) {
      const petNames = queries.map(({ obj }) => obj.name)
      return ownersByPetNames(context.app.pg, petNames)
    }
  }
}
```

</div>

💡 For the full code examples and db setup instructions, see the repository

---

<div class="dense">

# Step 5: Context 💻

Context is an object populated at the server level which is made accessible to resolvers.

- Create a `User` type with `name` and `locale` properties
- Create an in-memory array of `User` with different locales
- Create a query called `getUserByLocale` returning the first user with `en` locale
- Set the property `locale: 'en'` in the mercurius context
- Respond with JSON object:

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
const server = Fastify(...)

server.register(mercurius, {
  schema,
  resolvers,
  context: () => ({
    locale: 'en'
  })
})
```

```js
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

Hooks are registered with the `fastify.graphql.addHook` method and allow you to listen to specific events in the GraphQL request/response lifecycle.

By using hooks you can interact directly with the GraphQL lifecycle of Mercurius.

- Create a query called `sum` which returns the sum of two numbers
- Create and print logs for the following hooks:
  - `preParsing`
  - `preValidation`
  - `preExecution`
  - `onResolution`
- Enrich the response with an error with the message "foo" in the `preExecution` hook

</div>

---

<div class="dense">

- The query should return something similar to:

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

<div class="dense">

# Step 7: Error handling 💻

- The query should return something similar to:

```json
{
  "data": {
    "findUser": null
  },
  "errors": [
    {
      "message": "Invalid User ID",
      "locations": [{ "line": 2, "column": 3 }],
      "path": ["findUser"],
      "extensions": {
        "code": "USER_ID_INVALID",
        "id": "5"
      }
    }
  ]
}
```

</div>

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

A GraphQL server can act as a Gateway that composes the schemas of the underlying services into one federated schema and executes queries across the services. Every underlying service must be a GraphQL server that supports the federation.

- Create a Federated GraphQL gateway which listens on port 4000
- Run and expose to the gateway two GraphQL services on ports 4001 and 4002
- In order to use gateway, you should import the following lib:

```js
import mercuriusGateway from '@mercuriusjs/gateway'
...
gateway.register(mercuriusGateway, {...});
```

- Service 1 has a `User` type and a `me` query which returns the user
- Service 2 has a `Post` type and extends `User` with a `posts` array which are the posts of that user

</div>

---

<div class="dense">

# Step 8: Federation 💻

- Use the import below for registering the service with federation enabled:

```js
import { mercuriusFederationPlugin } from '@mercuriusjs/federation'

service.register(mercuriusFederationPlugin, {...}
```

- Keep an in-memory array of users of the type `User` and posts of type `Post`
- The query should return something similar to:

```json
{
  "data": {
    "me": {
      "name": "John",
      "posts": [
        { "id": "p1", "title": "Post 1", "content": "Content 1" },
        { "id": "p3", "title": "Post 3", "content": "Content 3" }
      ]
    }
  }
}
```

</div>

---

# Step 8: Solution / 1

```js
// server.js
...
await createService(
  4001,
  service1.schema,
  service1.resolvers
)
await createService(
  4002,
  service2.schema,
  service2.resolvers
)

const gateway = buildGateway()
await gateway.listen({ port: 4000 })
...
```

---

# Step 8: Solution / 2

```js
// index.js
import Fastify from 'fastify'
import mercuriusGateway from '@mercuriusjs/gateway'

export default function buildGateway() {
  const gateway = Fastify({
    logger: { transport: { target: 'pino-pretty' } }
  })

  gateway.register(mercuriusGateway, {
    graphiql: true,
    jit: 1,
    gateway: {
      services: [
        { name: 'user', url: 'http://localhost:4001/graphql' },
        { name: 'post', url: 'http://localhost:4002/graphql' }
      ]
    }
  })

  return gateway
}
```

---

# Step 8: Solution / 3

```js
// services/service.js
import Fastify from 'fastify'
import { mercuriusFederationPlugin } from '@mercuriusjs/federation'

const createService = async (port, schema, resolvers) => {
  const service = Fastify()

  service.register(mercuriusFederationPlugin, {
    schema,
    resolvers,
    graphiql: true,
    jit: 1
  })
  await service.listen({ port })

  return service
}

export { createService }
```

> 💡 see service1 and service2 implementations in the repo

---

# Step 9: Variables 💻

<div class="dense">

- Review the `add` functionality implemented before
- The `add` function is supplied with dynamic parameters<br/>`($x: Int!, $y: Int!)`
- The inputs to the `add` function should be passed as query variables, e.g <br/>`{ "x": 3, "y": 5 }`
- The query should return something similar to:

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
    add(x: Int!, y: Int!): Int
  }
`

const resolvers = {
  add: async ({ x, y }) => x + y
}
```

> 💡 The implementation is the same as before

---

# Step 9: Trying it out

In terminal

```bash
curl --request POST \
  --url http://localhost:3000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"query AddQuery ($x: Int!, $y: Int!) { add(x: $x, y: $y) }","variables":{"x":3,"y":5},"operationName":"AddQuery"}'
```

Output

```json
{
  "data": {
    "add": 8
  }
}
```

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

<div class="dense">

- The query should return something similar to:

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
      { "id": 1, "name": "John Doe", "age": 32, "level": "novice" }
    ],
    "getAdvancedUsers": [
      { "id": 2, "name": "Jane Doe", "age": 28, "level": "advanced" }
    ]
  }
}
```

</div>

---

<div class="dense">

# Step 11: Authorization

In RESTful APIs, a common use case is to restrict access to certain endpoints unless the user has permission to access them. Likewise in GraphQL, you can restrict access to certain fields unless the user has permission to access them.

In this step, we will carry on from Step 8 (Federation) and modify the `me` query so that it only returns the current user and their posts, and no one else's.

- In the service containing the `me` query, update the schema to define a new directive
- Define a `role` argument for the directive that can be either `VERIFIED` or `ADMIN`
- Annotate the `me` query with the new directive and pass in an argument of `role: VERIFIED`
- Annotate the `author` field with the new directive and pass in an argument of `role: ADMIN`
</div>

---

<div class="dense">

# Step 11: Authorization

- Install the `mercurius-auth` package and register it with the gateway
- Specify the following properties in the options object for the plugin:
  - `authDirective` - the name of the directive you just defined
  - `authContext` - logic to extract the user's role. For simplicity's sake, we will extract the user's role from the `X-Role` request header. In a real-world application, you may pass a JSON Web Token (JWT) via the headers, verify and decode it to extract the user's ID, role(s), and permission(s).
  - `applyPolicy` - logic that determines, given the user's role, whether the server should allow the client to access this field or object?

</div>

---

# Step 11: Solution / 1

<div class="middle-flex">

```js {1,4-11,14}
// services/service1.js
const service1 = {
  schema: `
  enum Role {
    ADMIN
    VERIFIED
  }

  directive @auth(
    role: Role
  ) on OBJECT | FIELD_DEFINITION

  extend type Query {
    me: User @auth(role: VERIFIED)
  }
  
  type User @key(fields: "id") {
    id: ID!
    name: String!
  }
  `,
  ...
}
```

</div>


---

# Step 11: Solution / 2

<div class="middle-flex">

```js {1,4-9,15}
// services/service2.js
const service2 = {
  schema: `
  enum Role {
    ADMIN
    VERIFIED
  }

  directive @auth(role: Role) on OBJECT | FIELD_DEFINITION

  type Post @key(fields: "id") {
    id: ID!
    title: String
    content: String
    author: User @auth(role: ADMIN)
  }

  type User @key(fields: "id") @extends {
    id: ID! @external
    name: String @external
    posts: [Post]
  }`,
  ...
}
```

</div>

---

# Step 11: Solution / 3

<div class="middle-flex">

```js
// index.js
import mercuriusAuth from 'mercurius-auth';
...
gateway.register(mercuriusAuth, {
  authContext (context) {
    return {
      role: context.reply.request.headers['x-role']
    }
  },
  async applyPolicy (authDirectiveAST, parent, args, context, info) {
    const directiveRole = authDirectiveAST.arguments
      .find(arg => arg.name.value === 'role')
      .value.value;

    return context.auth.role === directiveRole || context.auth.role === 'ADMIN';
  },
  authDirective: 'auth'
})

```

</div>

---

<div class="middle-flex">

# Step 11: Trying it out / No header

### In terminal

```bash
curl --request POST \
  --url http://localhost:4000/graphql \
  --header 'Content-Type: application/json' \
  --data '{"query":"{ me { name posts { title author { name }}}}"}'
```

```json
{
  "data": { "me": null },
  "errors": [{
    "message": "Failed auth policy check on me",
    "locations": [{
      "line": 1,
      "column": 3
    }],
    "path": [ "me" ]
  }]
}
```

</div>

---

<div class="middle-flex">

# Step 11: Trying it out / VERIFIED

### In terminal

```bash
curl --request POST \
  --url http://localhost:4000/graphql \
  --header 'Content-Type: application/json' \
  --header 'X-Role: VERIFIED' \
  --data '{"query":"{ me { name posts { title author { name }}}}"}'
```

```json
{
  "data": {
    "me": {
      "name": "John",
      "posts": [{
        "title": "Post 1",
        "author": null
      }, {
        "title": "Post 3",
        "author": null
      }]
    }
  },
  "errors": [{
      "message": "Failed auth policy check on author",
      "locations": [ ... ],
      "path": [ ... ]
    },
    ...
  ]
}
```

</div>

---

<div class="middle-flex">

# Step 11: Trying it out / ADMIN

### In terminal

```bash
curl --request POST \
  --url http://localhost:4000/graphql \
  --header 'Content-Type: application/json' \
  --header 'X-Role: ADMIN' \
  --data '{"query":"{ me { name posts { title author { name }}}}"}'
```

```json
{
  "data": {
    "me": {
      "name": "John",
      "posts": [{
        "title": "Post 1",
        "author": {  "name": "John" }
      }, {
        "title": "Post 3",
        "author": { "name": "John" }
      }]
    }
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
