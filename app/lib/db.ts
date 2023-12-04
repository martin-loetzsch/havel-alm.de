import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const POSTGRES_URL = process.env.POSTGRES_URL || ''

if (!POSTGRES_URL) {
	throw new Error("Please set the POSTGRES_URL environment variable");
}

export const connection_string = POSTGRES_URL + (process.env.SKIP_SSL ? "" : "?sslmode=require")


const pool = new Pool({connectionString: connection_string })

const db = drizzle(pool, {logger: false})

export default db

