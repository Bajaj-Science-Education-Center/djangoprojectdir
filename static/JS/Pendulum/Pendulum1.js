let MASS = 1;
let LENGTH = 200;
let ANGLE = 30;
let g = 7;
let damping = 1;

let play;

let MASSslider;
let LENGTHslider;
let ANGLEslider;
let gslider;
let DAMPINGslider;

let MASSvalue;
let LENGTHvalue;
let ANGLEvalue;
let gvalue;
let DAMPINGvalue;

let b;

let canvas;

function setup() {
  canvas = createCanvas(800, 450);
  canvas.parent('canvasContainer');

  canvas.elt.style.border = "3px solid #293462";
  canvas.elt.style.borderRadius = "10px";
  canvas.elt.style.margin = "25px auto";

  background("#FFF1C1");

  initiateSliders();
  initiateValues();

  b = new Bob(400, 150, 30);
  b.show();

  play = false;

  manageControlPanel();
}

function draw() {
  if(play) {
    background("#FFF1C1");

    fill("#293462");
    stroke("#216583");
    rect(300,130, 200, 20);

    b.update();
    b.show();

  } else {
    b = new Bob(400, 150, 30);

    background("#FFF1C1");

    fill("#293462");
    stroke("#216583");
    rect(300,130, 200, 20);

    b.show();

    updateConstants();
  }

  manageControlPanel();
}

function initiateSliders() {
  MASSslider = document.getElementById("MassSlider");
  LENGTHslider = document.getElementById("LengthSlider");
  ANGLEslider = document.getElementById("AngleSlider");
  gslider = document.getElementById("gSlider");
  DAMPINGslider = document.getElementById("DampingSlider");
}

function initiateValues() {
  MASSvalue = $("#Mass");
  LENGTHvalue = $("#Length");
  ANGLEvalue = $("#Angle");
  gvalue = $("#g");
  DAMPINGvalue = $("#Damping");
}

function manageControlPanel() {
  //console.log(MASSslider);
  MASSvalue.html(Number(MASSslider.value));
  LENGTHvalue.html(Number(LENGTHslider.value));
  ANGLEvalue.html(Number(ANGLEslider.value));
  gvalue.html(Number(gslider.value)/10);
  DAMPINGvalue.html(Number(DAMPINGslider.value)/1000);
}

function updateConstants() {
  MASS = Number(MASSslider.value);
  LENGTH = Number(LENGTHslider.value);
  ANGLE = Number(ANGLEslider.value);
  g = Number(gslider.value);
  damping = Number(DAMPINGslider.value);

}

function startStop() {
  let button = document.getElementById("button");

  if(play) {
    play = false;

    button.innerHTML = "Start";
    button.style.backgroundColor = "#216583";

  } else {
    play = true;

    button.innerHTML = "Stop";
    button.style.backgroundColor = "#F76262";
  }
}
