'use strict';

const { timer } = require('../fascis/g_fascis');

const fn = function(...args) {
  console.dir({ args });
};
debugger
const fucus = timer(fn).setLimit(2).setTimer(1200);
fucus(0);
fucus.printFn();
debugger
setTimeout(() => {
  fucus('primus');
}, 100);

setTimeout(() => {
  fucus('secundus');
}, 500);

