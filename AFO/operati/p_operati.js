'use strict';

const { print } = require('../fascis/p_fascis');

const fn = function(...args) {
  console.dir({ args });
};

debugger
const crFn = print(fn);
debugger
crFn(0);
crFn.printFn();



