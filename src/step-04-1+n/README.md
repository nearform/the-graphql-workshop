# step-4

## Setup

- start the server with `npm run start`

Server is running on port 3000

## Running the example

Send a graphQL request with the following query:

```js
{ 
  pets {
    name
    owner {
      name
    }
  }
}
```
