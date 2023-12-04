
import type { Config } from 'drizzle-kit';

import { connection_string } from '@/app/lib/db';

export default {
	schema: ['./app/(tracking)/pageViewTable.ts'],
	driver: 'pg' ,
	dbCredentials: {
		connectionString: connection_string,
	},
} satisfies Config;

