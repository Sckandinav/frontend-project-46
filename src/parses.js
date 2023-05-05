import yaml from 'js-yaml';

const parse = (data, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
    case '.yaml':
      return yaml.load(data);
    default:
      console.log(format);
      throw new Error(`${format} is not the correct format.`);
  }
};
export default parse;
