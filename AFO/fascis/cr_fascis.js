'use strict';

const { artus } = require('../artus/artus');

const objProto = {
  cancel() {
    communis.closure.kill = true;
  },
  resume(){
    communis.closure.kill = false;
  },
};

const internus = (exitus, communis, fn, ...args) => {

  if (!communis.closure.kill) fn(...args);

};

const communis = {
  internus,
  os: function() {
  },
  objProto,
  closure: {
    kill: false,
  },
};

const cancelResume = artus.bind(null, communis);

module.exports = { cancelResume };
