# custom shell for coloring + timing
SHELL=./.makeshell $(or $@,-)

# disable command echoing, will be done by makeshell
.SILENT:

# virtual env creation, package updates, db migration


build:
	pnpm install
	pnpm run build

rebuild-photos:
	python3 process_photos.py
	rm -rf .next/cache/images
	pnpm run dev

find-unused-images:
	diff --color <(PRINT_IMAGE_PATHS=TRUE pnpm exec next build 2>&1 1>/dev/null | grep '^photos' | sort | uniq) <(cd public && find photos -type f | grep -v '.DS_Store' | sort) || true

psql:
	DISABLE_MAKESHELL psql "$(VERCEL_POSTGRESQL_URL)"

track-page_views:
	DISABLE_MAKESHELL cat page_views.sql | psql -x "$(VERCEL_POSTGRESQL_URL)"

clean:
	rm -rvf .next node_modules
