class Link {
  constructor() {
    this.posX = 100;
    this.posY = 155;
  }

  mover() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.posX += 5;
    }

    if (keyIsDown(LEFT_ARROW)) {
      this.posX -= 5;
    }

    if (this.posX < 0) {
      this.posX = 0;
    }

    if (this.posX > 500) {
      this.posX = 500;
    }
  }

  dibujar() {
    if (keyIsDown(UP_ARROW)) {
      image(patadalink, this.posX, this.posY, 300, 195);
    } else {
      image(link, this.posX, this.posY, 300, 195);
    }

    this.mover();
  }
}
