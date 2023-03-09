# step-10

## Setup

- start the server with `npm run start`

Server is running on port 3000

## Running the example

Send a graphQL request to http://localhost:3000/graphql with the following query:

```js
{
  getNoviceUsers {
    ...userFields
  }
  getAdvancedUsers {
    ...userFields
  }
}
 fragment userFields on User {
    id
    name
    age
    level
}
```
