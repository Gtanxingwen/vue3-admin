const pkg = require('./package.json');
const { dependencies, devDependencies } = pkg;

function genPkgNames(obj) {
  let keys = [];
  Object.keys(obj).forEach((key) => {
    keys.push(key);
  });

  return keys;
}

const deps = genPkgNames(dependencies);
const devDeps = genPkgNames(devDependencies);

const depCommand = `pnpm add ${deps.join(' ')}`;
const devDepCommand = `pnpm add ${devDeps.join(' ')} -D`;

console.log('==============================================')
console.log(depCommand);
console.log('==============================================')
console.log(devDepCommand);
console.log('==============================================')
