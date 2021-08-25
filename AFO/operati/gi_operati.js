'use strict';

const { timer } = require('../fascis/g_fascis');
const { memoizeAsync } = require('../fascis/i_fascis');

const fn = (x, callback) => {
  if (typeof x !== 'number') callback('argument is not a number');
  callback(null, x);
};
const callback = (...args) => args;

const add = (...data) => {
  console.log('event add called with: ', data);
};

const mfn = memoizeAsync(fn).setLengthCache(2).onEventCache('add', add);

const fucus = timer(mfn).setLimit(3).setTimer(1200);

fucus(0, callback);
fucus.printFn();

setTimeout(() => {
  fucus(1, callback);
  fucus(2, callback);
}, 100);

setTimeout(() => {
  fucus(3, callback);
}, 500);

