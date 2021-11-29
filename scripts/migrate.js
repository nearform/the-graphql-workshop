import esMain from 'es-main'
import config from '../postgrator.config.js'
import Postgrator from 'postgrator'
import pg from 'pg'

async function migrate() {
  const client = new pg.Client({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password
  })

  try {
    await client.connect()

    const postgrator = new Postgrator({
      migrationPattern: config.migrationPattern,
      driver: config.driver,
      database: config.database,
      schemaTable: config.schemaTable,
      execQuery: query => client.query(query)
    })

    await postgrator.migrate()
  } catch (error) {
    console.error(error.appliedMigrations)
  }

  await client.end()
}

if (esMain(import.meta)) {
  try {
    migrate()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
