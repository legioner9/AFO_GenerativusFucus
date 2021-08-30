'use strict';

const { print } = require('../fascis/printArgs.fas');

const fn = function(...args) {
  console.dir({ args });
};

debugger
const crFn = print(fn);
debugger
crFn(0);
crFn.printFn();



