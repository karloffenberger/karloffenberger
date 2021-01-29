import Phaser from 'phaser';
import PhaserMatterCollisionPlugin from 'phaser-matter-collision-plugin';

import { Scene as PreloaderScene } from './scenes/preload';
import { Scene as MainScene } from './scenes/main';

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#eeeeee',
  physics: {
    default: 'matter',
    matter: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [PreloaderScene, MainScene],
  scale: {
    zoom: 2,
    mode: Phaser.Scale.RESIZE,
    parent: 'game-container',
  },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin,
        key: 'matterCollision',
        mapping: 'matterCollision',
      },
    ],
  },
};

window.addEventListener('load', () => new Phaser.Game(config));
