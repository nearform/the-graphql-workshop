# step-09

## Setup

- start the server with `npm run start`

Server is running on port 3000

## Running the example

Send a graphQL request to http://localhost:3000/graphql with the following query:

```js
query AddQuery ($x: Int!, $y: Int!) {
    add(x: $x, y: $y)
}
```

and with variables as:

```json
{ "x": 3, "y": 5 }
```