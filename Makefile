# custom shell for coloring + timing
SHELL=./.makeshell $(or $@,-)

# disable command echoing, will be done by makeshell
.SILENT:

# virtual env creation, package updates, db migration


build:
	yarn install
	yarn build

clean:
	rm -rvf .next node_modules
