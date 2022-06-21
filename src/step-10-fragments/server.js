import buildServer from './index.js'

const app = buildServer()

app.listen({ port: 3000 })
