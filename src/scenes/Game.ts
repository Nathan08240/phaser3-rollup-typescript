import { World } from "matter";
import Phaser from "phaser";
import { Player } from "../Classes/Player";
import { Stickman } from "../Classes/Stickman";
import config from "../config";

export default class Game extends Phaser.Scene {
  private player1: Player | null = null;
  private floorY: number = 300;

  private stickman: string = "stickman";
  private healthBar: string = "healthBar";

  constructor() {
    super("GameScene");
  }

  create() {
    this.player1 = new Player(
      {
        scene: this.sys.scene,
        x: 200,
        y: this.floorY,
      },
      this.stickman,
      this.healthBar
    );
  }

  preload() {
    this.load.image(this.stickman, "assets/stickman.png");
    this.load.image(this.healthBar, "assets/healthBar.png");
  }
}
