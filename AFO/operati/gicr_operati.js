'use strict';

const { timer } = require('../fascis/g_fascis');
const { memoizeAsync } = require('../fascis/i_fascis');
const { cancelResume } = require('../fascis/cr_fascis');

const fn = (x, callback) => {
  if (typeof x !== 'number') callback('argument is not a number');
  callback(null, x);
};
const callback = (...args) => args;

const add = (...data) => {
  console.log('event add called with: ', data);
};
debugger
const mfn = memoizeAsync(fn).setLengthCache(2).onEventCache('add', add);

const fucus = timer(mfn).setLimit(3).setTimer(1200);
const fucus3pipe = cancelResume(fucus);
debugger
fucus3pipe.cancel()
fucus3pipe(0, callback);
fucus3pipe.resume()
fucus3pipe.printFn();

setTimeout(() => {
  fucus3pipe(1, callback);
  fucus3pipe(2, callback);
}, 100);

setTimeout(() => {
  fucus3pipe(3, callback);
}, 500);

