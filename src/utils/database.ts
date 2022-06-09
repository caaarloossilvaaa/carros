import { Pool } from 'pg'

let conn: any

if (!conn) {
  conn = new Pool({
    user: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DATABASE
  })
  console.log('Database connected!')
}

export { conn }
