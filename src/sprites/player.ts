import { Base, ConstructorParams as BaseConstructorParams } from './base';

const WALKING_SPEED = 2.5;

export type ConstructorParams = BaseConstructorParams & { char: string };

export class Player extends Base {
  private char: string;

  constructor({ char, ...args }: ConstructorParams) {
    super({ ...args, texture: `char:${char}-idle` });

    this.char = char;

    this.createPhysics();
    this.createAnimations();
  }

  private createPhysics() {
    this.scene.add.existing(this);
  }

  private createAnimations() {
    this.anims.create({
      key: 'idle',
      frames: this.scene.anims.generateFrameNames(`char:${this.char}-idle`),
    });

    this.anims.create({
      key: 'walk',
      frames: this.scene.anims.generateFrameNames(`char:${this.char}-walk`),
    });
  }

  get velocity() {
    return this.body.velocity;
  }

  update() {
    const cursors = this.scene.input.keyboard.createCursorKeys();
    let playerVelocity = new Phaser.Math.Vector2();

    if (cursors.left.isDown || cursors.right.isDown) {
      this.setFlipX(cursors.left.isDown);
      playerVelocity.x = cursors.left.isDown ? -1 : 1;
    }

    if (cursors.up.isDown || cursors.down.isDown) {
      playerVelocity.y = cursors.up.isDown ? -1 : 1;
    }

    playerVelocity.normalize();
    playerVelocity.scale(WALKING_SPEED);
    this.setVelocity(playerVelocity.x, playerVelocity.y);
    if (Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
      this.anims.play('walk', true);
    } else {
      this.anims.play('idle', true);
    }
  }
}
