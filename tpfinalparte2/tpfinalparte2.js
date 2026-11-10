
let fondo;
let link;
let ganon;
let vidaLink;
let vidaGanon;

let corazonlink1;
let corazonlink2;
let corazonlink3;

let corazonganon1;
let corazonganon2;
let corazonganon3;

let jugadorLink;
let jugadorGanon;

let patadalink;
let patadaganon;

let ataque;

function preload() {
  fondo = loadImage("imagenes/escenario.png");

  link = loadImage("imagenes/link.png");
  ganon = loadImage("imagenes/ganon.png");

  vidaLink = loadImage("imagenes/vidalink.png");
  vidaGanon = loadImage("imagenes/vidaganon.png");

  corazonlink1 = loadImage("imagenes/corazonlink1.png");
  corazonlink2 = loadImage("imagenes/corazonlink2.png");
  corazonlink3 = loadImage("imagenes/corazonlink3.png");

  corazonganon1 = loadImage("imagenes/corazonganon1.png");
  corazonganon2 = loadImage("imagenes/corazonganon2.png");
  corazonganon3 = loadImage("imagenes/corazonganon3.png");

  patadalink = loadImage("imagenes/patadalink.png");
  patadaganon = loadImage("imagenes/patadaganon.png");
}

function setup() {
  createCanvas(800, 400);

  jugadorLink = new JugadorLink();
  jugadorGanon = new JugadorGanon();

  ataque = new Patada();
}

function draw() {
  image(fondo, 0, 0, 800, 400);

  image(vidaLink, 20, 5, 200, 60);

  if (jugadorLink.estado.vidas >= 1) {
    image(corazonlink1, 55, 55, 50, 30);
  }

  if (jugadorLink.estado.vidas >= 2) {
    image(corazonlink2, 100, 55, 50, 30);
  }

  if (jugadorLink.estado.vidas >= 3) {
    image(corazonlink3, 145, 55, 50, 30);
  }

  image(vidaGanon, 600, 5, 200, 60);

  if (jugadorGanon.estado.vidas >= 1) {
    image(corazonganon1, 625, 55, 50, 30);
  }

  if (jugadorGanon.estado.vidas >= 2) {
    image(corazonganon2, 660, 55, 50, 30);
  }

  if (jugadorGanon.estado.vidas >= 3) {
    image(corazonganon3, 695, 55, 50, 30);
  }

  jugadorLink.dibujar();
  jugadorGanon.dibujar();
}

class Personaje {
  constructor() {
    this.vidas = 3;
    this.vivo = true;
  }

  recibirGolpe() {
    if (this.vivo) {
      this.vidas--;

      if (this.vidas == 0) {
        this.vivo = false;
      }
    }
  }
}

class Patada {
  detectar(posX1, posY1, posX2, posY2) {
    if (dist(posX1, posY1, posX2, posY2) < 140) {
      return true;
    } else {
      return false;
    }
  }

  detectarGanon(posX1, posY1, posX2, posY2) {
    if (dist(posX1, posY1, posX2, posY2) < 200) {
      return true;
    } else {
      return false;
    }
  }
}

class JugadorLink {
  constructor() {
    this.posX = 100;
    this.posY = 155;
    this.estado = new Personaje();
    this.atacando = false;
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

  atacar() {
    if (keyIsDown(UP_ARROW)) {
      if (!this.atacando) {
        if (ataque.detectar(
          this.posX + 150,
          this.posY + 100,
          jugadorGanon.posX + 110,
          jugadorGanon.posY + 84
        )) {
          jugadorGanon.estado.recibirGolpe();
        }

        this.atacando = true;
      }
    } else {
      this.atacando = false;
    }
  }

  dibujar() {
    if (this.estado.vivo) {
      if (keyIsDown(UP_ARROW)) {
        image(patadalink, this.posX, this.posY, 300, 195);
      } else {
        image(link, this.posX, this.posY, 300, 195);
      }

      this.mover();
      this.atacar();
    }
  }
}

class JugadorGanon {
  constructor() {
    this.posX = 550;
    this.posY = 170;
    this.estado = new Personaje();
    this.atacando = false;
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

  atacar() {
    if (keyIsDown(87)) {
      if (!this.atacando) {
        if (ataque.detectarGanon(
          this.posX + 110,
          this.posY + 84,
          jugadorLink.posX + 150,
          jugadorLink.posY + 100
        )) {
          jugadorLink.estado.recibirGolpe();
        }

        this.atacando = true;
      }
    } else {
      this.atacando = false;
    }
  }

  dibujar() {
    if (this.estado.vivo) {
      if (keyIsDown(87)) {
        image(patadaganon, this.posX, this.posY, 220, 168);
      } else {
        image(ganon, this.posX, this.posY, 220, 168);
      }

      this.mover();
      this.atacar();
    }
  }
}
