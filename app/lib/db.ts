import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

export const connection_string = process.env.POSTGRES_URL || ''
if (!connection_string) {
	throw new Error("Please set the POSTGRES_URL environment variable");
}

const pool = new Pool({connectionString: connection_string})

const db = drizzle(pool, {logger: false})

export default db

