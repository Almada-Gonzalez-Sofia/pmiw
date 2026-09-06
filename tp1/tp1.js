//variables
let fondo;
let pantalla = 0; 

//arreglos y variables Chikorita
let framesChikoritaCaminar = [];
let imgChikoritaSorpresa;
let imgChikoritaSalto;
let n_frames_caminar = 4; 
let escala_chikorita = 3.2; 

//arreglos y variables Snorlax(obstáculo)
let framesSnorlaxDormido = [];
let n_frames_snorlax = 2; 
let escala_snorlax = 3.5; 

//arreglos y variables Mew
let framesMewVolar = [];
let framesMewReir = [];
let n_frames_mew_volar = 2; 
let n_frames_mew_reir = 2;  
let escala_mew = 2.5;       

// Variables, máquina de estados y posicion 
let estadoChikorita = "caminar"; 
let xChikorita = -80;            
let ySuelo = 520;                
let yChikorita = ySuelo;        
let velXChikorita = 1.8;         
let velYChikorita = 0;           
let gravedad = 0.5;              
let fuerzaSalto = -14.5;         

let estadoMew = "volar"; 
let xMew = -150;                 
let yMewBase = 220;              
let velXMew = 1.8;               
let temporizadorRisa = 0;        

let xObstaculo = 330; 
let yObstaculo = 520;

let temporizadorReaccion = 0;

let btn_x = 320;
let btn_y = 270;
let btn_ancho = 160;
let btn_alto = 50;

function preload() {
  fondo = loadImage('data/fondo_nubes.png');

  
  for (let i = 0; i < n_frames_caminar; i++) {
    framesChikoritaCaminar.push(loadImage('data/chikorita/caminar_' + nf(i, 2) + '.png'));
  }
  
  imgChikoritaSorpresa = loadImage('data/chikorita/sorpresa.png');
  imgChikoritaSalto = loadImage('data/chikorita/salto.png');

  
  for (let i = 0; i < n_frames_snorlax; i++) {
    framesSnorlaxDormido.push(loadImage('data/snorlax/dormido_' + nf(i, 2) + '.png'));
  }

  
  for (let i = 0; i < n_frames_mew_volar; i++) {
    framesMewVolar.push(loadImage('data/mew/mew_' + nf(i, 2) + '.png'));
  }
 
  for (let i = 0; i < n_frames_mew_reir; i++) {
    framesMewReir.push(loadImage('data/mew/rie_' + nf(i, 2) + '.png'));
  }
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 235);
  if (pantalla === 0) {
    dibujarPantallaInicio(); 
  } else if (pantalla === 1) {
    dibujarAnimacionGeneral(); 
  }
}

//evento de mouse
function mousePressed() {
  if (pantalla === 0) {
    if (botonPresionado(btn_x, btn_y, btn_ancho, btn_alto)) {
      pantalla = 1;
    }
  }
}

//evento d eteclado
function keyPressed() {
  if (key === 'r' || key === 'R') {
    reiniciarEscena();
  }
}
