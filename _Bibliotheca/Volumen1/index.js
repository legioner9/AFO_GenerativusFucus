'use strict';

const fs = require('fs');
const path = require('path');
const objExports = {};

const arrPath = fs.readdirSync(__dirname);

arrPath.forEach(item => {
  const pathToDir = path.join(__dirname, item);
  const fss = fs.statSync(pathToDir);
  if (fss.isDirectory()) {
    const contentDir = fs.readdirSync(pathToDir);
    if (~contentDir.indexOf('index.js')) objExports[item] = require(path.join(__dirname, item, 'index.js'));
  }
});

module.exports = objExports;
