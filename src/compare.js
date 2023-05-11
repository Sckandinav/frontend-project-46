import { readFileSync } from 'fs';
import path from 'path';
import compareData from './buildDiffTrees.js';
import parse from './parses.js';
import format from './formaters/index.js';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFormat = (filename) => path.extname(filename);
const readFile = (filePath) => parse(readFileSync(filePath, 'utf-8'), getFormat(filePath));

const genDiff = (file1, file2, formatName = 'stylish') => {
  const parsed1 = readFile(getAbsolutPath(file1));
  const parsed2 = readFile(getAbsolutPath(file2));
  const data = compareData(parsed1, parsed2);

  return format(data, formatName);
};

export default genDiff;
