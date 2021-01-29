import Phaser from 'phaser';

import { Player } from '../sprites/player';
import { CHARS } from '../constants';

export const KEY = 'MAIN';

export class Scene extends Phaser.Scene {
  private context: { [key: string]: any } = {};

  constructor() {
    super({ key: KEY });
  }

  renderLevel(key: string) {
    this.context.player = new Player({
      world: this.matter.world,
      x: 100,
      y: 100,
      char: CHARS[Math.floor(Math.random() * CHARS.length)],
    });
  }

  create() {
    this.renderLevel('1');
  }

  update() {
    this.context.player.update();
  }
}
