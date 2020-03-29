import { promises as fs } from 'fs';

interface Lessons {
  name: string;
  slides: string;
}

const getDirectories = async (source: string = './') => {
  const dirents = await fs.readdir(source, { withFileTypes: true });
  return dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const main = async (): Promise<Lessons[]> => {
  const directories = await getDirectories();
  return directories.map((dir) => ({
    name: dir,
    slides: `${dir}/slides.mdx`,
  }));
};

export default main;
