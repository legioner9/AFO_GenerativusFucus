'use strict';

const fs = require('fs');
const path = require('path');

const objExport = {};

const checkIgnore = (arrPath) => {
  if (~arrPath.indexOf('.bibignore')) {
    const pathToBibignore = path.join(__dirname, '.bibignore');
    return fs.readFileSync(pathToBibignore, 'utf8')
    .split('\n')
    .filter(item => item.length || typeof item !== 'string');
  } else throw new Error('.bibignore file not found');
};

const filterIgnored = (arrPath, ignoreArray) => {
  return arrPath.filter(item => {
    let result = false;
    ignoreArray.forEach(ignore => {

      const pathToItem = path.join(__dirname, item);

      const fss = fs.statSync(pathToItem);
      if (!fss.isDirectory()) return result = true;

      const contentDir = fs.readdirSync(pathToItem);

      if (!~contentDir.indexOf('index.js')) return result = true;

      const regex = new RegExp(ignore, 'i');
      const boolean = Boolean(~item.search(regex));
      result = result || boolean;
    });
    return !result;
  });
};
debugger
const arrPath = fs.readdirSync(__dirname);

const ignoreArray = checkIgnore(arrPath);

const cleanPath = filterIgnored(arrPath, ignoreArray);

cleanPath.forEach(item => {
  objExport[item] = require(path.join(__dirname, item, 'index.js'));
});

module.exports = objExport;

