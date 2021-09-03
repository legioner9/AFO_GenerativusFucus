const Path = require('path');
debugger
const rootDir = __dirname.split(Path.sep);
rootDir.splice(rootDir.length - 2);
const projectDir = rootDir.join(Path.sep);

const _require = path => {
  const this_path = Path.join(projectDir + '_', path, 'index.js');
  const R = require(this_path);
  return R;
};

exports._require = _require;
