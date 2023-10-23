# custom shell for coloring + timing
SHELL=./.makeshell $(or $@,-)

# disable command echoing, will be done by makeshell
.SILENT:

# virtual env creation, package updates, db migration


build:
	pnpm install
	pnpm run build

rebuild-images:
	python3 process_images.py
	rm -rf .next/cache/images
	pnpm run dev

find-unused-images:
	diff --color <(pnpm exec next build 2>&1 1>/dev/null | grep '^photos' | sort | uniq) <(cd public && find photos -type f | grep -v '.DS_Store' | sort) || true

clean:
	rm -rvf .next node_modules
