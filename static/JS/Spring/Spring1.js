let canvas;

let MASS = 100;
let SPRING_CONSTANT = 1;
let MEAN_LENGTH = 250;
let DISPLACEMENT = 100;
let FRICTION = 1;
let g = 1;

let spring;

let play;

let MASSslider;
let SPRING_CONSTANTslider;
let MEAN_LENGTHslider;
let DISPLACEMENTslider;
let FRICTIONslider;
let gslider;

let MASSvalue;
let SPRING_CONSTANTvalue;
let MEAN_LENGTHvalue;
let DISPLACEMENTvalue;
let FRICTIONvalue;
let gvalue;

function setup() {

  canvas = createCanvas(800, 450);
  canvas.parent('canvasContainer');
  //console.log(canvas);

  canvas.elt.style.border = "3px solid #293462";
  canvas.elt.style.borderRadius = "10px";
  canvas.elt.style.margin = "25px auto";

  background("#FFF1C1");

  initiateSliders();
  initiateValues();

  spring = new SpringSystem(100, 300, 100, MASS, SPRING_CONSTANT, MEAN_LENGTH, DISPLACEMENT);

  play = false;

  strokeWeight(3);
  stroke("#216583");
  line(100, 350, 700, 350);
  line(100, 100, 100, 350);

  spring.show();

  manageControlPanel();
}

function draw() {
  if(play == true) {
    background("#FFF1C1");

    strokeWeight(3);
    stroke("#216583");
    line(100, 350, 700, 350);
    line(100, 100, 100, 350);

    spring.update();
    spring.show();
  }

  manageControlPanel();
  updateConstants();

  if(!play) {
    spring = new SpringSystem(100, 300, 100, MASS, SPRING_CONSTANT, MEAN_LENGTH, DISPLACEMENT);

    //console.log(spring);

    background("#FFF1C1");

    strokeWeight(3);
    stroke("#216583");
    line(100, 350, 700, 350);
    line(100, 100, 100, 350);

    //spring.mass.mass = MASS;
    //spring.mass.position.x += 100+MEAN_LENGTH+DISPLACEMENT;
    //console.log(spring.mass.position.x);
    //spring.coil.k = SPRING_CONSTANT;
    //spring.coil.mean_length = MEAN_LENGTH;
    //spring.coil.displacement = DISPLACEMENT;

    spring.show();
  }
}

function initiateSliders() {
  MASSslider = document.getElementById("MassSlider");
  SPRING_CONSTANTslider = document.getElementById("SpringConstantSlider");
  MEAN_LENGTHslider = document.getElementById("MeanLengthSlider");
  DISPLACEMENTslider = document.getElementById("DisplacementSlider");
  FRICTIONslider = document.getElementById("FrictionSlider");
  gslider = document.getElementById("gSlider");
}

function initiateValues() {
  MASSvalue = $("#Mass");
  SPRING_CONSTANTvalue = $("#SpringConstant");
  MEAN_LENGTHvalue = $("#MeanLength");
  DISPLACEMENTvalue = $("#Displacement");
  FRICTIONvalue = $("#Friction");
  gvalue = $("#g");
}

function manageControlPanel() {
  //console.log(MASSslider);
  MASSvalue.html(MASS);
  SPRING_CONSTANTvalue.html(SPRING_CONSTANT);
  MEAN_LENGTHvalue.html(MEAN_LENGTH);
  DISPLACEMENTvalue.html(DISPLACEMENT);
  FRICTIONvalue.html(FRICTION);
  gvalue.html(g);
}

function updateConstants() {
  MASS = Number(MASSslider.value);
  SPRING_CONSTANT = Number(SPRING_CONSTANTslider.value);
  MEAN_LENGTH = Number(MEAN_LENGTHslider.value);
  DISPLACEMENT = Number(DISPLACEMENTslider.value);
  FRICTION = Number(FRICTIONslider.value/100000);
  g = Number(gslider.value);
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

  //spring = new SpringSystem(100, 300, 100, MASS, SPRING_CONSTANT, MEAN_LENGTH, DISPLACEMENT);
}


//$("#button").click(function() {
//  play = !play;
//  console.log("Clicked!");
//});
