install:
	npm ci

gendiff-json:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json
	
gendiff-yaml:
	node bin/gendiff.js __fixtures__/file1.yaml __fixtures__/file2.yaml

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test


test-coverage:
	npm test -- --coverage --coverageProvider=v8

