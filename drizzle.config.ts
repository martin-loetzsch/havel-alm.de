import type { Config } from 'drizzle-kit';

import { drizzleDbCredentials } from '@/app/lib/db';

export default {
  schema: ['./app/(tracking)/pageViewTable.ts'],
  dialect: 'postgresql',
  dbCredentials: drizzleDbCredentials,
} satisfies Config;
