import * as directoriesMap from './directories-map.json';

export interface Lesson {
  name: string;
  slides: string;
}

const map: Lesson[] = directoriesMap;
export default map;
