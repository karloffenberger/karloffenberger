import Phaser from 'phaser';

import { CHARS } from '../constants';
import { KEY as MAIN_SCENE_KEY } from './main';

const SPRITE = {
  ...['idle', 'walk'].reduce(
    (acc, state) =>
      CHARS.reduce(
        (acc, char) => ({
          ...acc,
          [`char:${char}-${state}`]: {
            file: `assets/characters/${char}/${state}.png`,
            atlasFile: `assets/characters/${char}/${state}.json`,
            animFile: `assets/characters/${char}/${state}_anim.json`,
          },
        }),
        acc,
      ),
    {},
  ),
};

export const KEY = 'PRELOAD';

export class Scene extends Phaser.Scene {
  constructor() {
    super({ key: KEY });
  }

  loadAssets() {
    //@ts-ignore
    Object.entries(SPRITE).forEach(([key, { file, atlasFile, animFile }]) => {
      this.load.atlas(key, file, atlasFile);
      this.load.animation(`${key}-anim`, animFile);
    });
  }

  preload() {
    this.loadAssets();
  }

  create() {
    this.scene.start(MAIN_SCENE_KEY);
  }
}
