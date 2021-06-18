class Bob {
  constructor(x, y, r) {
    this.l = LENGTH;
    this.mass = MASS;

    this.start = createVector(x, y);
    this.angle = ANGLE * 3.1415926535/180.0;
    this.aVel = 0;
    this.end = createVector(x + this.l * sin(this.angle), y + this.l * cos(this.angle));

    this.radius = r;

    this.velocity = createVector(0, 0);
  }

  update() {
    let aAcc = (-g/(this.l*10)) * sin(this.angle);
    this.aVel += aAcc;
    this.aVel *= (1 - damping/1000);
    this.angle += this.aVel;

    this.end = createVector(this.start.x + (this.l * sin(this.angle)), this.start.y + (this.l * cos(this.angle)));
  }

  show() {
    fill("#293462");
    stroke("#216583");
    strokeWeight(3);

    line(this.start.x, this.start.y, this.end.x, this.end.y);
    ellipse(this.end.x, this.end.y, this.radius, this.radius);
  }
}
