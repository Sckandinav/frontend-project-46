import { test, expect } from '@jest/globals';
// import fs from 'fs';
import compare from '../src/compare.js';

const file1 = '__fixtures__/file1.json';

const file2 = '__fixtures__/file2.json';

test('myTest', () => {
  expect(compare(file1, file2)).toEqual(`{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`);
});
