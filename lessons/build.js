"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const directoriesMapFilePath = path_1.default.resolve('./directories-map.json');
const getDirectories = async (source = './') => {
    const dirents = await fs_1.promises.readdir(source, { withFileTypes: true });
    return dirents
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
};
const main = async () => {
    const directories = await getDirectories();
    const directoriesMap = directories.map((dir) => ({
        name: dir,
        slides: `${dir}/slides.mdx`,
    }));
    await fs_1.promises.writeFile(directoriesMapFilePath, JSON.stringify(directoriesMap));
};
if (!module.parent) {
    // eslint-disable-next-line no-console
    main().then(() => console.log('Build done'));
}
