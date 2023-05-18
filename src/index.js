import { readFileSync } from 'fs';
import path from 'path';
import buildDiffTree from './buildDiffTree.js';
import parse from './parse.js';
import format from './formaters/index.js';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFormat = (filename) => path.extname(filename);
const parseFile = (filePath) => parse(readFileSync(filePath, 'utf-8'), getFormat(filePath));

const genDiff = (file1, file2, formatName = 'stylish') => {
  const parsed1 = parseFile(getAbsolutPath(file1));
  const parsed2 = parseFile(getAbsolutPath(file2));
  const data = buildDiffTree(parsed1, parsed2);

  return format(data, formatName);
};

export default genDiff;
