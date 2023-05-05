import {
  expect, describe, it,
} from '@jest/globals';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import compare from '../src/compare.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const jsonResult = readFixture('expected_json_result.txt');
const yamlResult = readFixture('expected_yaml_result.txt');

describe('compare tests', () => {
  it('work with json files', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');
    expect(compare(file1, file2)).toEqual(jsonResult);
  });
  it('work with yaml files', () => {
    const file3 = getFixturePath('file1.yaml');
    const file4 = getFixturePath('file2.yaml');
    expect(compare(file3, file4)).toEqual(yamlResult);
  });
  it('wrong format', () => {
    const file5 = getFixturePath('file1.txt');
    const file6 = getFixturePath('file2.txt');
    expect(() => {
      compare(file5, file6);
    }).toThrow();
  });
});
