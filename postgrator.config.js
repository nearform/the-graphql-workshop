export default {
  driver: 'pg',
  host: '127.0.0.1',
  port: 5433,
  database: 'postgres',
  user: 'postgres',
  password: 'postgres',
  schemaTable: 'migrations',
  migrationPattern: './migrations/*.sql'
}
