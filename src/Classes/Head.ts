class Head extends Phaser.GameObjects.Sprite {
  constructor(config: any, image: string) {
    super(config.scene, config.x, config.y, image);

    config.scene.add.existing(this);
  }
}

export { Head };
