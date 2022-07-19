module.exports = () => {
  const path = require('path');
  const fs = require('fs');

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
};

(const makeDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}
const createDirs= [
  dist.images,
  dist.iconsPng,
  dist.iconsSvg
].forEach(element => {
  makeDir(element);
});
)