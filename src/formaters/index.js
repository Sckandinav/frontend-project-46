import makeFormtter from './stylish.js';
import formatToPlain from './plain.js';

const format = (data, formatName) => {
  switch (formatName) {
    case 'stylish': {
      return makeFormtter(data);
    }
    case 'plain': {
      return formatToPlain(data);
    }
    case 'json': {
      return JSON.stringify(data, null, 2);
    }
    default:
      throw new Error('Invalid format');
  }
};

export default format;
