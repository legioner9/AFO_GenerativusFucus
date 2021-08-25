'use strict';

const { artus } = require('../artus/artus');

const objProto = {
  printArgs() {
    console.log('printArgs: ', this.getOstium().args);
    return this;
  },
};

const internus = (exitus, communis, fn, ...args) => {
  fn(...args);
};

const communis = {
  internus,
  os: function() {
  },
  objProto,
  closure: {
  },
};

const print = artus.bind(null, communis);

module.exports = { print };
