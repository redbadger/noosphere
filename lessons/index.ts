import { promises as fs } from 'fs';

const getDirectories = async (source: string = './') => {
  const dirents = await fs.readdir(source, { withFileTypes: true });
  return dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const main = async () => {
  const directories = await getDirectories();
  console.log({ directories });
};

if (!module.parent) {
  main().then();
}
