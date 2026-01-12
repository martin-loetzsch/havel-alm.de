import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const POSTGRES_URL = process.env.POSTGRES_URL || ''

if (!POSTGRES_URL) {
	throw new Error("Please set the POSTGRES_URL environment variable");
}

const skipSsl = Boolean(process.env.SKIP_SSL)
export const connection_string = POSTGRES_URL + (skipSsl ? "" : "?sslmode=require")

const dbUrl = new URL(POSTGRES_URL)
const dbPort = dbUrl.port ? Number(dbUrl.port) : 5432
const dbName = dbUrl.pathname.startsWith('/') ? dbUrl.pathname.slice(1) : dbUrl.pathname

export const drizzleDbCredentials = {
	host: dbUrl.hostname,
	port: dbPort,
	user: dbUrl.username ? decodeURIComponent(dbUrl.username) : undefined,
	password: dbUrl.password ? decodeURIComponent(dbUrl.password) : undefined,
	database: dbName,
	ssl: skipSsl ? false : 'require',
} as const

const pool = new Pool({connectionString: connection_string })

const db = drizzle(pool, {logger: false})

export default db
