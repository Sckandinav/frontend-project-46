import _ from 'lodash';

const getParse = (data) => JSON.parse(data);

const getStringFormat = (obj) => {
  const toArr = (obj.flat(Infinity)).map((element) => _.values(element));
  const data = toArr.map((x) => `${x[0]} ${x[1]}: ${x[2]}`);
  const toString = data.join('\n');
  return `{\n${toString}\n}`;
};

export { getParse, getStringFormat };
