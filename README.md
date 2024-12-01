The website behind (https://havel-alm.de).

## Getting Started

Set these environment variables:
- `POSTGRES_URL`: connection to a local postgres db
- `SKIP_SSL`: don't use SSL for local connections
- `VERCEL_POSTGRESQL_URL`: Connection to the production postgres db

Install dependencies with `pnpm install`.

Run the dev server with `pnpm run dev`.

Create a production build with `pnpm run build`.