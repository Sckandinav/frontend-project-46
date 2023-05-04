import { readFileSync } from 'fs';
import path from 'path';
import compareTree from './buildDiffTrees.js';
import parse from './parses.js';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFormat = (filename) => path.extname(filename);
const readFile = (filePath) => parse(readFileSync(filePath, 'utf-8'), getFormat(filePath));

const compare = (filepath1, filepath2) => {
  const parsed1 = readFile(getAbsolutPath(filepath1));
  const parsed2 = readFile(getAbsolutPath(filepath2));
  const data = compareTree(parsed1, parsed2);

  return data;
};

export default compare;
