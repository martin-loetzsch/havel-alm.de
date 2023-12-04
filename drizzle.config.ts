
import type { Config } from 'drizzle-kit';

const connection_string = process.env.POSTGRES_URL || ''
if (!connection_string) {
	throw new Error("Please set the POSTGRES_URL environment variable");
}

export default {
	schema: ['./app/(tracking)/PageViewTable.ts'],
	driver: 'pg' ,
	dbCredentials: {
		connectionString: connection_string,
	},
} satisfies Config;

