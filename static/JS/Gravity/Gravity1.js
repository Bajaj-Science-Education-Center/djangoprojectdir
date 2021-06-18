let ts = 50;
let canvas;

let g = 0;
let G = 1;

let gSlider;
let gValue;

let gravity;
let balls = [];
let play;

function setup() {
  canvas = createCanvas(800, 450);
  canvas.parent('canvasContainer');

  canvas.elt.style.border = "3px solid #293462";
  canvas.elt.style.borderRadius = "10px";
  canvas.elt.style.margin = "25px auto";

  background("#FFF1C1");

  initiateSliders();
  initiateValues();

  gravity = createVector(0/pow(ts, 2), g/pow(ts, 2));

  play = false;
}

function draw() {
  background("#FFF1C1");
  if(play) {
    if(frameRate() < 53) {
      ts -= 10;
      gravity = createVector(0/pow(ts, 2), g/pow(ts, 2));
    }
    if(frameRate() > 58) {
      ts += 10;
      gravity = createVector(0/pow(ts, 2), g/pow(ts, 2));
    }
    if(ts < 10) {
      ts = 10;
      gravity = createVector(0/pow(ts, 2), g/pow(ts, 2));
    }
    if(ts > 100) {
      ts = 100;
      gravity = createVector(0/pow(ts, 2), g/pow(ts, 2));
    }

    for(let i = 0; i < ts; i+=1) {
      for(let j = 0; j < balls.length; j+=1) {
        balls[j].update(gravity);

        for(let k = 0; k < balls.length; k+=1) {
          let collided = false;
          if(balls[j] != balls[k] && distSq(balls[j].pos, balls[k].pos) <= pow(balls[j].radius + balls[k].radius, 2)) {
            collide(balls[j], balls[k]);
            collided = true;
          }

          if(balls[j] != balls[k] && !collided) {
            balls[j].applyGravitationalForce(balls[k]);
          }
        }
      }
    }
  }

  for(let i = 0; i < balls.length; i+=1) {
    balls[i].show();
    //console.log(balls[i].mass);
  }

  manageControlPanel();
  if(!play) {
    updateConstants();
  }

}

function collide(b1, b2) {
  let t = 1.0/frameRate(); //If any errors, make sure this doesn't run before draw() has run once

  let mag = b1.vel.mag() * sqrt(b1.restitution/100.0);

  let force = createVector(b1.pos.x-b2.pos.x, b1.pos.y-b2.pos.y);
  force.normalize();
  force.mult(mag);

  b1.applyForce(force);
  force.mult(-1);
  b2.applyForce(force);
}

function distSq(a, b) {
  let x = pow((a.x-b.x), 2) + pow((a.y-b.y), 2);
  return(x);
}

function mouseClicked() {
  if(mouseX <= width && mouseX >= 0 && mouseY <= height && mouseY >= 0 && !play) {
    balls.push(new Ball(mouseX, mouseY, 0, 0, 100, 75, 25));

    let data = new BallData();

    let table = document.getElementById("dataTable");
    let row = table.insertRow(table.rows.length - 1);

    let title_cell = row.insertCell(0);
    title_cell.style.backgroundColor = "#216583";
    title_cell.colSpan = "6";
    title_cell.innerHTML = "Planet #" + balls.length;

    //X-Velocity
    row = table.insertRow(table.rows.length - 1);
    let property = row.insertCell(0);
    property.colSpan = "2";
    property.innerHTML = "Initial X-Velocity"
    let slider = row.insertCell(1);
    slider.colSpan = "2";
    slider.innerHTML = "<input type='range' min='-200' max='200' value='0'>";
    let value = row.insertCell(2);
    value.colSpan = "2";
    value.innerHTML = "0"
    data.velXslider = slider.firstElementChild;
    data.velXvalue  = Object(value);
    //console.log(typeof value);
    //console.log(typeof data.velXvalue);

    //Y-Velocity
    row = table.insertRow(table.rows.length - 1);
    property = row.insertCell(0);
    property.colSpan = "2";
    property.innerHTML = "Initial Y-Velocity"
    slider = row.insertCell(1);
    slider.colSpan = "2";
    slider.innerHTML = "<input type='range' min='-200' max='200' value='0'>";
    value = row.insertCell(2);
    value.colSpan = "2";
    value.innerHTML = "0";
    data.velYslider = slider.firstElementChild;
    data.velYvalue  = value;

    //Mass
    row = table.insertRow(table.rows.length - 1);
    property = row.insertCell(0);
    property.colSpan = "2";
    property.innerHTML = "Mass"
    slider = row.insertCell(1);
    slider.colSpan = "2";
    slider.innerHTML = "<input type='range' min='10' max='200' value='100'>";
    value = row.insertCell(2);
    value.colSpan = "2";
    value.innerHTML = "100";
    data.massSlider = slider.firstElementChild;
    data.massValue  = value;

    //Restitution
    row = table.insertRow(table.rows.length - 1);
    property = row.insertCell(0);
    property.colSpan = "2";
    property.innerHTML = "Restitution"
    slider = row.insertCell(1);
    slider.colSpan = "2";
    slider.innerHTML = "<input type='range' min='0' max='100' value='75'>";
    value = row.insertCell(2);
    value.colSpan = "2";
    value.innerHTML = "0.75";
    data.restitutionSlider = slider.firstElementChild;
    data.restitutionValue  = value;

    //Radius
    row = table.insertRow(table.rows.length - 1);
    property = row.insertCell(0);
    property.colSpan = "2";
    property.innerHTML = "Radius"
    slider = row.insertCell(1);
    slider.colSpan = "2";
    slider.innerHTML = "<input type='range' min='1' max='50' value='25'>";
    value = row.insertCell(2);
    value.colSpan = "2";
    value.innerHTML = "25";
    data.radiusSlider = slider.firstElementChild;
    data.radiusValue  = value;

    balls[balls.length-1].ballData = data;
    //console.log(balls[balls.length-1].ballData);
    console.log(data);
    console.log(typeof data.velXvalue);
    console.log(data.velXvalue);
    //console.log(data.velXvalue);

  }
}

//-------------------------Sim Manager-------------------------//

function initiateSliders() {
  gSlider = document.getElementById("gSlider");
}

function initiateValues() {
  gValue = $("#g");
}

function manageControlPanel() {
  gValue.html(Number(gSlider.value)/100);
  for(let i = 0; i < balls.length; i+=1) {
    balls[i].ballData.manageControlPanel();
  }
}

function updateConstants() {

  G = Number(gSlider.value)/100;
  gravity = createVector(0/pow(ts, 2), g/pow(ts, 2));

  for(let i = 0; i < balls.length; i+=1) {
    balls[i].ballData.updateConstants(balls[i]);
  }
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
