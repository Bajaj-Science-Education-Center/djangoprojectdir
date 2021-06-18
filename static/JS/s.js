
let num = 0;
let blocks = [];

function setup() {
  let canvas = createCanvas(windowWidth/2, 145, WEBGL);
  canvas.parent("header");
  canvas.canvas.setAttribute("style", "position: absolute; top: 0px; left: 0px; z-index: 0;");

  background(41,52,98);

  /*for(let i = 0; i < num; i+=1) {
    blocks.push(new ParticleBlock(random(4, 6), random(-width/2, width/2 - 75), random(-height/2, height/2-60), random(50, 100), random(40, 80)));
    //blocks.push(new ParticleBlock(random(4, 8), 0, 0, random(50, 150), random(50, 150)));
  }*/
  blocks.push(new ParticleBlock(random(4, 8), -width/2, -height/2, width * 10.0/100.0, 100));
  blocks.push(new ParticleBlock(random(4, 8), -width/2 - 10, -height/2 + 95, width * 7.0/100.0, 40));
  blocks.push(new ParticleBlock(random(4, 8), -width/2 - 10, -height/2 + 130, width * 20.0/100.0, 40));
  blocks.push(new ParticleBlock(random(4, 8), -width/2 + width * 12.0/100.0 , -height/2 + 75, width * 15.0/100.0, 120));
  blocks.push(new ParticleBlock(random(4, 8), -width/2 + width * 20.0/100.0, -height/2 + 130, width * 25.0/100.0, 30));
  blocks.push(new ParticleBlock(random(4, 8), -width/2 + width * 70.0/100.0, -height/2 + 80, width * 20.0/100.0, 80));
  blocks.push(new ParticleBlock(random(4, 8), -width/2 + width * 90.0/100.0, -height/2 + 100, width * 10.0/100.0, 50));
  blocks.push(new ParticleBlock(random(4, 8), -width/2  + width * 93.0/100.0, -height/2, width * 20.0/100.0, 150));
  blocks.push(new ParticleBlock(random(4, 8), -width/2 + width * 85.0/100.0, -height/2 - 40, width * 20.0/100.0, 80));
  blocks.push(new ParticleBlock(random(4, 8), -width/2 + width * 63.0/100.0, -height/2 + 130, width * 10.0/100.0, 20));
  blocks.push(new ParticleBlock(random(4, 8), -width/2 + width * 68.0/100.0, -height/2 -10, width * 20.0/100.0, 40));
  blocks.push(new ParticleBlock(random(4, 8), -width/2 + width * 30.0/100.0, -height/2 + 20, width * 7.0/100.0, 40));

  num = blocks.length;

  console.log(width);
  console.log(height);
}

function draw() {
  background(41,52,98);

  for(let i = 0; i < num; i+=1) {
    blocks[i].run();
    blocks[i].drawStrokes();
  }

  //console.log("x:" + mouseX + "  y:" + mouseY);
}
