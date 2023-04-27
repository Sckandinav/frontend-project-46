import { readFileSync } from 'fs';
import getParse from './parses.js';
import compareTree from './buildDiffTrees.js';

const readFile = (path) => readFileSync(path, 'utf8');

const compare = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const dataParse1 = getParse(data1);
  const dataParse2 = getParse(data2);

  const data = compareTree(dataParse1, dataParse2);

  return data;
};

export default compare;
