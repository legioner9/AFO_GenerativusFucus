'use strict';

const { print } = require('../fascis/p_fascis');
const { cancelResume } = require('../fascis/cr_fascis');

const fn = function(...args) {
  console.dir({ args });
};

const crFn = cancelResume(fn);
const pcrFn = print(crFn);

debugger
pcrFn.cancel();
console.log('cancel flag =', pcrFn.getCommunis.getCommunis().closure.kill)
pcrFn(0);
pcrFn.printArgs();
pcrFn.resume();
console.log('cancel flag =', pcrFn.getCommunis.getCommunis().closure.kill)
pcrFn(1);



