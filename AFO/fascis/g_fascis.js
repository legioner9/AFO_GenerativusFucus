'use strict';

const { artus } = require('../artus/artus');

const objProto = {
  printFn() {
    console.log(this.getOstium().fn);
    return this;
  },
  setLimit(limit) {
    communis.closure.limit = limit;
    return this;
  },
  setTimer(timerMsec) {
    communis.closure.timerMsec = timerMsec;
    const timer_ = setTimeout(() => {
      communis.closure.kill = true;
      timer_.close();
    }, communis.closure.timerMsec);
    return this;
  }
};

const internus = (exitus, communis, fn, ...args) => {

  if (communis.closure.counter === communis.closure.limit) communis.closure.kill = true;
  else communis.closure.counter++;

  if (!communis.closure.kill) fn(...args);


};

const communis = {
  alius: {
    method() {
    },
  },
  internus,
  os: function() {
  },
  objProto,
  closure: {
    limit: 0,
    counter: 0,
    timerMsec: 0,
    kill: false,
  },
};

const timer = artus.bind(null, communis);

module.exports = { timer };
