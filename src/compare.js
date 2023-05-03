import { readFileSync } from 'fs';
import { getParse } from './parses.js';
import compareTree from './buildDiffTrees.js';

const compare = (filepath1, filepath2) => {
  const data1 = readFileSync(filepath1, 'utf8');
  const data2 = readFileSync(filepath2, 'utf8');
  const dataParse1 = getParse(data1);
  const dataParse2 = getParse(data2);
  const data = compareTree(dataParse1, dataParse2);

  return data;
};

export default compare;
