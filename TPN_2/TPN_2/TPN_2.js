let fondo;
let link;
let ganon;
let patadalinck;
let patadaganon;
let corazonlink;
let corazonganon;
let vidaLink;
let vidaganon;

let xLink = 100;
let xGanon = 550;

let ataqueLink = false;
let ataqueGanon = false;

function preload() {
  fondo = loadImage("imagenes/escenario.png");
  link = loadImage("imagenes/link.png");
  ganon = loadImage("imagenes/ganon.png");
  patadalinck = loadImage("imagenes/patadalink.png");
  patadaganon = loadImage("imagenes/patadaganon.png");
  corazonlink = loadImage("imagenes/corazonlink.png");
  corazonganon = loadImage("imagenes/corazonganon.png");
  vidaLink = loadImage("imagenes/vidalink.png");
  vidaganon = loadImage("imagenes/vidaganon.png");
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  image(fondo, 0, 0, 800, 400);

  image(vidaLink, 20, 5, 180, 60);
  image(corazonlink, 86, 50, 90, 40);

  image(vidaganon, 600, 5, 180, 60);
  image(corazonganon, 632, 50, 90, 40);

  if (ataqueLink) {
    image(patadalinck, xLink, 155, 280, 195);
  } else {
    image(link, xLink, 155, 300, 195);
  }

  if (ataqueGanon) {
    image(patadaganon, xGanon, 170, 280, 168);
  } else {
    image(ganon, xGanon, 170, 220, 168);
  }

  if (keyIsDown(LEFT_ARROW)) {
    xLink = xLink - 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    xLink = xLink + 5;
  }

  if (keyIsDown(65)) {
    xGanon = xGanon - 5;
  }

  if (keyIsDown(68)) {
    xGanon = xGanon + 5;
  }
}

function keyPressed() {

  if (keyCode === UP_ARROW) {
    ataqueLink = true;
  }

  if (key === 'w' || key === 'W') {
    ataqueGanon = true;
  }
}

function keyReleased() {

  if (keyCode === UP_ARROW) {
    ataqueLink = false;
  }

  if (key === 'w' || key === 'W') {
    ataqueGanon = false;
  }
}
