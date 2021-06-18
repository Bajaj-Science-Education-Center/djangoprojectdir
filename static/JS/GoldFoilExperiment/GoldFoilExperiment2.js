let canvas;
let play;

let ELECTROSTATIC_CONSTANT = 2;
let pNum = 100;
let aNum = 10;
let pCharge = 0.2;
let aCharge = 5;

let eSlider;
let pNumSlider;
let aNumSlider;
let pChargeSlider;
let aChergeSlider;

let eValue;
let pNumValue;
let aNumValue;
let pChargeValue;
let aChergeValue;

particles = [];
atoms = [];

function setup() {
  canvas = createCanvas(800, 450);
  canvas.parent('canvasContainer');

  canvas.elt.style.border = "3px solid #293462";
  canvas.elt.style.borderRadius = "10px";
  canvas.elt.style.margin = "25px auto";

  background("#FFF1C1");

  initiateSliders();
  initiateValues();

  for(let i = 0; i < aNum; i++) {
    atoms.push(new GoldAtom(300, 50 + i * (height-100)/(aNum-1), 10, (height-100)/(aNum-1), aCharge));
    console.log();
  }

  for(let i = 0; i < pNum; i++) {
    particles.push(new AlphaParticle(700, 150 + i*(height-300)/(pNum-1), -2, 0, 3, pCharge));
  }

  play = false;
}

function draw() {

  fill(255, 241, 193, 100);
  rect(0, 0, width, height);

  for(let i = 0; i < atoms.length; i++) {
    atoms[i].show();
  }

  for(let i = 0; i < particles.length; i++) {
    if(play) {
      particles[i].update(atoms);
    }
    particles[i].show();
  }

  if(!play) {
    updateConstants();

    atoms = [];
    particles = [];

    for(let i = 0; i < aNum; i++) {
      atoms.push(new GoldAtom(300, 50 + i * (height-100)/(aNum-1), 10, (height-100)/(aNum-1), aCharge));
      console.log();
    }

    for(let i = 0; i < pNum; i++) {
      particles.push(new AlphaParticle(700, 150 + i*(height-300)/(pNum-1), -2, 0, 3, pCharge));
    }
  }

  manageControlPanel();
}

function initiateSliders() {
  eSlider = document.getElementById("eSlider");
  pNumSlider = document.getElementById("pNumSlider");
  aNumSlider = document.getElementById("aNumSlider");
  pChargeSlider = document.getElementById("pChargeSlider");
  aChargeSlider = document.getElementById("aChargeSlider");
}

function initiateValues() {
  eValue = $("#e");
  pNumValue = $("#pNum");
  aNumValue = $("#aNum");
  pChargeValue = $("#pCharge");
  aChargeValue = $("#aCharge");
}

function manageControlPanel() {
  eValue.html(Number(eSlider.value)/100);
  pNumValue.html(Number(pNumSlider.value));
  aNumValue.html(Number(aNumSlider.value));
  pChargeValue.html(Number(pChargeSlider.value)/100);
  aChargeValue.html(Number(aChargeSlider.value)/100);
}

function updateConstants() {
  ELECTROSTATIC_CONSTANT = Number(eSlider.value)/100;
  pNum = Number(pNumSlider.value);
  aNum = Number(aNumSlider.value);
  pCharge = Number(pChargeSlider.value)/100;
  aCharge = Number(aChargeSlider.value)/100;

}

function startStop() {
  let button = document.getElementById("button");

  if(play) {
    play = false;
    background("#FFF1C1");

    button.innerHTML = "Start";
    button.style.backgroundColor = "#216583";

    atoms = [];
    particles = [];

    for(let i = 0; i < aNum; i++) {
      atoms.push(new GoldAtom(300, 50 + i * (height-100)/(aNum-1), 10, (height-100)/(aNum-1), aCharge));
      console.log();
    }

    for(let i = 0; i < pNum; i++) {
      particles.push(new AlphaParticle(700, 150 + i*(height-300)/(pNum-1), -2, 0, 3, pCharge));
    }

  } else {
    play = true;

    button.innerHTML = "Stop";
    button.style.backgroundColor = "#F76262";

    atoms = [];
    particles = [];

    for(let i = 0; i < aNum; i++) {
      atoms.push(new GoldAtom(300, 50 + i * (height-100)/(aNum-1), 10, (height-100)/(aNum-1), aCharge));
      console.log();
    }

    for(let i = 0; i < pNum; i++) {
      particles.push(new AlphaParticle(700, 150 + i*(height-300)/(pNum-1), -2, 0, 3, pCharge));
    }
  }
}
