import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
};

global.MINHAGLOBAL = 'VALOR DA GLOBAL';

export default _;
