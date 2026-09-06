
function elegirFrame(frames, velocidadAnimacion) {
  let indice = floor(frameCount / velocidadAnimacion) % frames.length;
  return frames[indice];
}

function botonPresionado(x, y, ancho, alto) {
  return (mouseX >= x && mouseX <= x + ancho && mouseY >= y && mouseY <= y + alto);
}

function reiniciarEscena() {
  xChikorita = -80;
  yChikorita = ySuelo;
  velYChikorita = 0;
  estadoChikorita = "caminar";

  xMew = -150;
  estadoMew = "volar";
}

function dibujarPantallaInicio() {
  imageMode(CORNER);
  image(fondo, 0, 0, width, height); 

  fill(46, 139, 87);
  stroke(0);
  strokeWeight(2);
  rectMode(CORNER);
  rect(btn_x, btn_y, btn_ancho, btn_alto);

  fill(255);
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Iniciar", btn_x + btn_ancho / 2, btn_y + btn_alto / 2);
}

function dibujarAnimacionGeneral() {
  imageMode(CORNER);
  image(fondo, 0, 0, width, height);

  let frameSnorlax = elegirFrame(framesSnorlaxDormido, 28);
  let altoSnorlax = frameSnorlax.height * escala_snorlax;
  let anchoSnorlax = frameSnorlax.width * escala_snorlax;

  imageMode(CORNER);
  image(frameSnorlax, xObstaculo - anchoSnorlax / 2, ySuelo - altoSnorlax, anchoSnorlax, altoSnorlax);

  let distancia = abs(xChikorita - xObstaculo); 

  if (estadoChikorita === "caminar") {
    yChikorita = ySuelo;
    xChikorita += velXChikorita; 
    
    if (distancia < 150 && xChikorita < xObstaculo) {
      estadoChikorita = "sorpresa";
      temporizadorReaccion = 25; //pausa de sorpresa
    }
  } 
  else if (estadoChikorita === "sorpresa") {
    yChikorita = ySuelo;
    temporizadorReaccion--; 
    
    if (temporizadorReaccion <= 0) {
      estadoChikorita = "saltar";
      velYChikorita = fuerzaSalto; 
    }
  } 
  else if (estadoChikorita === "saltar") {
    xChikorita += velXChikorita * 2.3; 
    yChikorita += velYChikorita;       
    velYChikorita += gravedad;         

    if (yChikorita >= ySuelo) {
      yChikorita = ySuelo;
      velYChikorita = 0;
      estadoChikorita = "caminar";
    }
  }

  let oscilacionAire = sin(frameCount * 0.05) * 8; 
  let yMewActual = yMewBase + oscilacionAire;

  if (estadoMew === "volar") {
    xMew += velXMew;

    if (xMew >= xObstaculo - 20 && xMew <= xObstaculo + 20) {
      estadoMew = "reir";
      temporizadorRisa = 28; 
    }
  } 
  else if (estadoMew === "reir") {
    xMew += velXMew * 0.4; 
    temporizadorRisa--;

    if (temporizadorRisa <= 0) {
      estadoMew = "volar";
      xMew += 25;
    }
  }

  let frameMew = (estadoMew === "volar") 
    ? elegirFrame(framesMewVolar, 12) 
    : elegirFrame(framesMewReir, 14);

  let altoMew = frameMew.height * escala_mew;
  let anchoMew = frameMew.width * escala_mew;

  imageMode(CENTER);
  image(frameMew, xMew, yMewActual, anchoMew, altoMew);

  let frameChikorita = (estadoChikorita === "caminar") 
    ? elegirFrame(framesChikoritaCaminar, 10) 
    : (estadoChikorita === "sorpresa") ? imgChikoritaSorpresa : imgChikoritaSalto;

  let altoChikorita = frameChikorita.height * escala_chikorita;
  let anchoChikorita = frameChikorita.width * escala_chikorita;

  imageMode(CORNER);
  image(frameChikorita, xChikorita - anchoChikorita / 2, yChikorita - altoChikorita, anchoChikorita, altoChikorita);

  fill(255);
  noStroke();
  textSize(16);
  textAlign(LEFT, TOP);
  text("[R] Reiniciar", 20, 20);
}
