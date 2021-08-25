'use strict';

const { memoizeAsync } = require('../fascis/i_fascis');

const fn = (x, callback) => {
  if (typeof x !== 'number') callback('argument is not a number');
  callback(null, x);
};
const callback = (...args) => args;

const add = (...data) => {
  console.log('event add called with: ', data);
};

const mfn = memoizeAsync(fn).setLengthCache(3).onEventCache('add', add);

mfn(1, callback);
debugger
mfn.clearCache();
debugger
mfn(1, callback);
mfn(1, callback);
debugger
mfn(2, callback);
mfn(3, callback);
mfn(4, callback);
debugger
