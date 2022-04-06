# The GraphQL Workshop

[![ci](https://github.com/nearform/the-graphql-workshop/actions/workflows/ci.yml/badge.svg)](https://github.com/nearform/the-graphql-workshop/actions/workflows/ci.yml)

A step by step guide to implement a GraphQL server with Fastify and Mercurius.

## Requirements

- Node LTS
- npm >=7
- docker
- docker-compose

## Setup

- `npm ci`
- `npm run db:up`
- `npm run db:migrate`

### Run automated tests

- `npm test --workspaces`

#### Run automated tests on a single project

- `npm test -w src/step-05-context`

## Running the modules

- `cd src/step-{n}-{name}`
- check each module's README file to see which scripts are available

## Presenting

- `npm start`

