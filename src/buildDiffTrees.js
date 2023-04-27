import _ from 'lodash';

const getKeys = (obj) => _.keys(obj);

const compareTree = (filepath1, filepath2) => {
  const unionKeys = _.sortBy(_.union(getKeys(filepath1), getKeys(filepath2)));

  const result = unionKeys.map((element) => {
    if (!Object.hasOwn(filepath1, element)) {
      return { action: '+', name: element, value: filepath2[element] };
    }
    if (!Object.hasOwn(filepath2, element)) {
      return { action: '-', name: element, value: filepath1[element] };
    }
    if (filepath1[element] !== filepath2[element]) {
      return [
        { action: '-', name: element, value: filepath1[element] },
        { action: '+', name: element, value: filepath2[element] },
      ];
    }
    return { action: ' ', name: element, value: filepath1[element] };
  });
  const data = (result.flat(Infinity)).map((element) => _.values(element));
  return data;
};

export default compareTree;
