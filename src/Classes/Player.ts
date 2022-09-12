import { HealthBar } from "./HealthBar";
import { Stickman } from "./Stickman";

class Player extends Phaser.GameObjects.Group {
  private stickman: Stickman;
  private healthBar: HealthBar;

  constructor(config: any, stickman: string, healthBar: string) {
    super(config.scene, { runChildUpdate: true });

    this.healthBar = new HealthBar(config, healthBar);
    this.stickman = new Stickman(config, stickman);

    this.add(this.healthBar);
    this.add(this.stickman);

    config.scene.add.existing(this);
  }
}

export { Player };
