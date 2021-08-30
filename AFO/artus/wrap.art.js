'use strict';

const clone = val => {
  if (typeof val !== 'object' || val === null) {
    return val;
  }
  const objOrArray = Array.isArray(val) ? new Array(val.length) : {};
  for (const key in val) {
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      objOrArray[key] = clone(val[key]);
    }
  }
  return objOrArray;
};

const artus = (communis, fn) => {

  const exitus = function(...args) {
    const ostium = {
      fn,
      args,
    };
    // define getter for clone ostium
    communis.os.prototype.getOstium = () => clone(ostium);

    communis.internus(exitus, communis, fn, ...args);
  };

  // define getter for clone communis
  const getCommunis = () => clone(communis);

  // add previous getCommunis to prototype that getCommunis - create chain prototype
  if (fn.getCommunis) {
    const tmp = function() {
    };
    tmp.prototype.getCommunis = fn.__proto__.getCommunis;
    Object.setPrototypeOf(getCommunis, tmp.prototype);
  }

  communis.objProto.getCommunis = getCommunis;

  for (const key in communis.objProto) {
    if (communis.objProto.hasOwnProperty(key)) communis.os.prototype[key] = communis.objProto[key];
  }

  // add previous proto to prototype that wrapper - create chain prototype
  Object.setPrototypeOf(communis.os.prototype, fn.__proto__);

  Object.setPrototypeOf(exitus, communis.os.prototype);

  return exitus;
};

module.exports = {
  artus,
};
