import { expect, describe, it } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const stylishResult = readFixture('stylishResult.txt');
const plainResult = readFixture('plainResult.txt');
const jsonResult = readFixture('jsonResult.txt');

describe('genDiff test', () => {
  it('work with yaml files', () => {
    const filePath1 = getFixturePath('file1.yaml');
    const filePath2 = getFixturePath('file2.yaml');
    expect(genDiff(filePath1, filePath2)).toEqual(stylishResult);
    expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(stylishResult);
    expect(genDiff(filePath1, filePath2, 'plain')).toEqual(plainResult);
    expect(genDiff(filePath1, filePath2, 'json')).toEqual(jsonResult);
  });

  it('work with json files', () => {
    const filePath1 = getFixturePath('file1.json');
    const filePath2 = getFixturePath('file2.json');

    expect(genDiff(filePath1, filePath2)).toEqual(stylishResult);
    expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(stylishResult);
    expect(genDiff(filePath1, filePath2, 'plain')).toEqual(plainResult);
    expect(genDiff(filePath1, filePath2, 'json')).toEqual(jsonResult);
  });
  it('wrong format', () => {
    const filePath1 = getFixturePath('file1.txt');
    const filePath2 = getFixturePath('file2.txt');
    expect(() => {
      genDiff(filePath1, filePath2);
    }).toThrow();
  });
});
