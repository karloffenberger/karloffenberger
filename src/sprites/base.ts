import Phaser from 'phaser';

export type ConstructorParams = {
  world: Phaser.Physics.Matter.World;
  x: number;
  y: number;
  texture?: string | Phaser.Textures.Texture;
  frame?: string | number;
};

export abstract class Base extends Phaser.Physics.Matter.Sprite {
  constructor({ world, x, y, texture, frame = 0 }: ConstructorParams) {
    //@ts-ignore
    super(world, x, y, texture, frame);
  }
}
