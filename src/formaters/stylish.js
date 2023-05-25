import _ from 'lodash';

const indent = ' ';
const signIndent = 2;
const indentCount = 4;

const makeIndent = (depth, isFull = true) => {
  const size = depth * indentCount;
  return isFull ? indent.repeat(size) : indent.repeat(size - signIndent);
};

const stringify = (data, depth) => {
  if (!_.isObject(data)) return String(data);

  const lines = Object
    .entries(data)
    .map(([key, value]) => `${makeIndent(depth + 1)}${key}: ${stringify(value, depth + 1)}`);
  return `{\n${lines.join('\n')}\n${makeIndent(depth)}}`;
};

const formatTree = (tree, depth = 1) => tree
  .map((node) => {
    switch (node.type) {
      case 'added': {
        return `${makeIndent(depth, false)}+ ${node.key}: ${stringify(node.value, depth)}`;
      }
      case 'removed': {
        return `${makeIndent(depth, false)}- ${node.key}: ${stringify(node.value, depth)}`;
      }
      case 'changed': {
        return [
          `${makeIndent(depth, false)}- ${node.key}: ${stringify(node.value1, depth)}`,
          `${makeIndent(depth, false)}+ ${node.key}: ${stringify(node.value2, depth)}`,
        ].join('\n');
      }
      case 'nested': {
        const children = formatTree(node.children, depth + 1).join('\n');
        return `${makeIndent(depth)}${node.key}: {\n${children}\n${makeIndent(depth)}}`;
      }
      default:
        return `${makeIndent(depth)}${node.key}: ${stringify(node.value, depth)}`;
    }
  });

const makeFormtter = (tree) => `{\n${formatTree(tree).join('\n')}\n}`;

export default makeFormtter;
