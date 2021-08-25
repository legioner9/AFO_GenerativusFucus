'use strict';

const { artus } = require('../artus/artus');

const closure = {

  cache: new Map(),
  lengthCache: 1,

  events: {
    timeout: null,
    memoize: null,
    overflow: null,
    add: null,
    del: null,
    clear: null,
  },
};

const objProto = {
  clearCache() {
    communis.closure.cache.clear();
    return this;
  },
  addCache(key, err, data) {
    this.emitEventCache('add', err, data);
    communis.closure.cache.set(key, { err, data });
    return this;
  },
  delCache(key) {
    this.emitEventCache('del', key);
    communis.closure.cache.delete(key);
    return this;
  },
  getCache(key, callback) {
    const record = communis.closure.cache.get(key);
    callback(record.err, record.data);
    return this;
  },
  onEventCache(eventName, listener) {
    if (eventName in communis.closure.events) {
      communis.closure.events[eventName] = listener;
    }
    return this;
  },
  emitEventCache(eventName, ...args) {
    const event = communis.closure.events[eventName];
    if (event) event(...args);
  }
};

const internus = function(exitus, communis, fn, ...args) {
  const callback = args.pop();

  const key = communis.alius.generateKey(args);
  const value = communis.closure.cache.get(key);

  if (communis.closure.cache.has(key)) {
    console.log(`from cache key: ${key}`);
    callback(value.err, value.data);
    return;
  }
  fn(...args, (err, data) => {
    // cache.set(key, { err, data });
    exitus.addCache(key, err, data);
    exitus.emitEventCache('memoize', key, err, data);
    if (communis.closure.cache.size > communis.closure.lengthCache) {
      const firstKey = communis.closure.cache.keys().next().value;
      console.log(`cache deleted key: ${firstKey}`);
      communis.closure.cache.delete(firstKey);
    }
    console.log(`callback called with args: ${err},${data}`);
    callback(err, data);
  });
};

const communis = {
  alius: {
    getKey(x) {
      return x.toString() + ':' + typeof x;
    },
    generateKey(arr) {
      const crypto = require('crypto');
      const key = arr.map(this.getKey).join('|');
      return crypto.createHash('sha256').update(key).digest('hex');
    },
  },
  internus,
  anteExitus: (closureForFn) => closureForFn,
  // comutClosure: (closureForFn) => closureForFn,
  // closureToMoresFn: (bfn, closureForFn) => (closureForFn, bfn),
  // returnBfn: (bfn, closureForFn) => () => {
  // },
  os: function() {
  },
  closure,
  objProto,
};

objProto.setLengthCache = function(length) {
  communis.closure.lengthCache = length;
  return this;
};

const memoizeAsync = artus.bind(null, communis);


module.exports = { memoizeAsync };
