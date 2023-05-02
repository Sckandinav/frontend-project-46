import { test, expect } from '@jest/globals';
// import fs from 'fs';
import compare from '../src/compare.js';

const file1 = `{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}`;

const file2 = `{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}`;

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
