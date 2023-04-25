import { readFileSync } from 'fs';

const readFile = (path) => readFileSync(path, 'utf8');

const compare = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const dataParse1 = JSON.parse(data1);
  const dataParse2 = JSON.parse(data2);

  return console.log(dataParse1, dataParse2);
};

export default compare;
