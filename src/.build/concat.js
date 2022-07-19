const path = require('path');
const fs = require('fs');
const concat = require('concat');
const glob = require('glob');
const distdir = path.resolve('..', 'dist', 'js');
const distfile = 'bundle.js';

const makeDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};
makeDir(distdir);
let files = glob('**/*.min.js', '', (data) => {
  console.log(data);
});

concat(files)
  .then((data) => write(path.resolve('..', 'src', 'js', distFile), data))
  .catch((e) => {
    console.error(e);
  });
//let ffiles = glob('**/*');
const read = (fName) => {
  new Promise((res, rej) => {
    fs.readFile(path.resolve(fName), (err, str) => {
      if (err) rej(err);
      res(str);
    });
  });
};
const write = (fName, str) => {
  new Promise((res, rej) => {
    fs.writeFile(path.resolve(fName), str, (err) => {
      if (err) return rej(err);
      return res(str);
    });
  });
};
