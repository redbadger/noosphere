import { promises as fs } from 'fs';
import path from 'path';
import { Lesson } from './index';

const directoriesMapFilePath = path.resolve('./directories-map.json');

export const getDirectories = async (source: string = '../lessons') => {
  const dirents = await fs.readdir(source, { withFileTypes: true });
  return dirents
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

const main = async (): Promise<void> => {
  const directories = await getDirectories();
  const directoriesMap: Lesson[] = directories.map((dir) => ({
    name: dir,
    slides: `${dir}/slides.mdx`,
  }));

  await fs.writeFile(directoriesMapFilePath, JSON.stringify(directoriesMap));
};

if (!module.parent) {
  // eslint-disable-next-line no-console
  main().then(() => console.log('Build done'));
}

export default main;
