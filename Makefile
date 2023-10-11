# custom shell for coloring + timing
SHELL=./.makeshell $(or $@,-)

# disable command echoing, will be done by makeshell
.SILENT:

# virtual env creation, package updates, db migration


build:
	yarn install
	yarn build

find-unused-images:
	diff --color <(yarn build 2>&1 | grep '^photos' | sort | uniq) <(cd public && find photos -type f | grep -v '.DS_Store' | sort)

clean:
	rm -rvf .next node_modules
