class Ganon {
  constructor() {
    this.posX = 550;
    this.posY = 170;
  }

  mover() {
    if (keyIsDown(68)) {
      this.posX += 5;
    }

    if (keyIsDown(65)) {
      this.posX -= 5;
    }

    if (this.posX < 0) {
      this.posX = 0;
    }

    if (this.posX > 580) {
      this.posX = 580;
    }
  }

  dibujar() {
    if (keyIsDown(87)) {
      image(patadaganon, this.posX, this.posY, 220, 168);
    } else {
      image(ganon, this.posX, this.posY, 220, 168);
    }

    this.mover();
  }
}
