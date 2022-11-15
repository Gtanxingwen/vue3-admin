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

const depCommand = `pnpm install ${deps.join(' ')}`;
const devDepCommand = `pnpm install ${devDeps.join(' ')} -D`;

console.log(depCommand);
console.log(devDepCommand);
