Object.defineProperty(exports, '__esModule', { value: true });
const fs_1 = require('fs');

const getDirectories = async (source = './') => {
  const dirents = await fs_1.promises.readdir(source, { withFileTypes: true });
  return dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};
const main = async () => {
  const directories = await getDirectories();
  return directories.map((dir) => ({
    name: dir,
    slides: `${dir}/slides.mdx`,
  }));
};
exports.default = main;
