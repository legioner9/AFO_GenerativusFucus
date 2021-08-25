'use strict';

const { cancelResume } = require('../fascis/cr_fascis');

const fn = function(...args) {
  console.dir({ args });
};

debugger
const crFn = cancelResume(fn);
debugger
crFn.cancel()
crFn(0);
crFn.resume()
crFn(1);
crFn(2);


