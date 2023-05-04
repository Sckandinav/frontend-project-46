import { fileURLToPath } from 'url';
import { dirname, resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import compare from '../src/compare.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename)
const readFixture = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const jsonResult = readFixture('expected_file.txt');

const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');

test('myTest', () => {
  expect(compare(file1, file2)).toEqual(jsonResult);
});
