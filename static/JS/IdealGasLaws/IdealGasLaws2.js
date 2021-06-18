let n = 200;
let temperature = 5;
let height_offset = 150;

let nSlider;
let temperatureSlider;
let heightSlider;

let nValue;
let temperatureValue;
let heightValue;

let particles = [];
let p;

let collisions;
let finalCollisions = 0;

let canvas;

let play;

function setup() {
  canvas = createCanvas(800, 450);
  canvas.parent('canvasContainer');

  canvas.elt.style.border = "3px solid #293462";
  canvas.elt.style.borderRadius = "10px";
  canvas.elt.style.margin = "25px auto";

  background("#FFF1C1");

  for(let i = 0; i < n; i++) {
    let theta = random(0, TWO_PI);
    particles.push(new Particle(random(200, 600), random(200, 400), 5*cos(theta), 5*sin(theta), 10));
  }

  p = new PlungerBox(600, 400, 200, 200, 10);

  collisions = 0;

  initiateSliders();
  initiateValues();
  manageControlPanel();

  play = false;
}

function draw() {
  background("#FFF1C1");


  if(play) {
    for(let i = 0; i < particles.length; i++) {
      particles[i].update(p);
      particles[i].show();
    }

    if(frameCount % 60 == 0) {
      finalCollisions = collisions;
      collisions = 0;
    }

    fill(41, 52, 98);
    noStroke();
    textSize(17);
    text("Collisions per Second (Measure of Pressure): " + round(finalCollisions), 200, 425);

  } else {
    p.update();
    updateConstants();
  }

  p.show();

  manageControlPanel();
}

function initiateSliders() {
  nSlider = document.getElementById("nSlider");
  temperatureSlider = document.getElementById("temperatureSlider");
  heightSlider = document.getElementById("heightSlider");
}

function initiateValues() {
  nValue = $("#n");
  temperatureValue = $("#temperature");
  heightValue = $("#height");
}

function manageControlPanel() {
  nValue.html(Number(nSlider.value));
  temperatureValue.html(Number(temperatureSlider.value)/10);
  heightValue.html(Number(heightSlider.value) + 200);
}

function updateConstants() {
  n = Number(nSlider.value);
  temperature = Number(temperatureSlider.value)/10;
  height_offset = Number(heightSlider.value);
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
    particles = [];
    for(let i = 0; i < n; i++) {
      let theta = random(0, TWO_PI);
      particles.push(new Particle(random(200, 600), random(200 - height_offset, 400), 5*cos(theta), 5*sin(theta), 10));
    }
  }
}
