class Ball {
  constructor(x, y, vx, vy, m, r, rad) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx/ts, -vy/ts);

    this.mass = m;
    this.restitution = r;

    this.radius = rad;

    this.ballData = null;
    //console.log("HI");
  }

  update(force) {
    force.add(this.collisionForce());

    this.vel.add(force);
    this.pos.add(this.vel);
  }

  show() {
    strokeWeight(5-(this.restitution/100)*4);
    stroke("#216583");
    //console.log(this.mass/200 * 255);
    fill(41, 52, 98, this.mass/200 * 255);
    //console.log(this.mass/200 * 255);
    ellipse(this.pos.x, this.pos.y, 2*this.radius, 2*this.radius);

    //console.log("planet ball " + this.pos.x + this.pos.y);
  }

  collisionForce() {
    let f = createVector(0, 0);

    //this.checkBorder();

    return(f);
  }

  checkBorder() {
    if(this.pos.x - this.radius <= 0) {
      this.vel.x = -this.vel.x * sqrt(this.restitution/100);
      this.pos.x = this.radius;
    }

    if(this.pos.x + this.radius >= width) {
      this.vel.x = -this.vel.x * sqrt(this.restitution/100);
      this.pos.x = width - this.radius;
    }

    if(this.pos.y - this.radius <= 0) {
      this.vel.y = -this.vel.y * sqrt(this.restitution/100);
      this.pos.y = this.radius;
    }

    if(this.pos.y + this.radius >= height) {
      this.vel.y = -this.vel.y * sqrt(this.restitution/100);
      this.pos.y = height - this.radius;
    }
  }

  applyGravitationalForce(other) {
    let rSquared = distSq(this.pos, other.pos);
    console.log(rSquared);

    let forceMag = (G * this.mass * other.mass / rSquared)/pow(ts, 2);

    let force = p5.Vector.sub(createVector(other.pos.x, other.pos.y), createVector(this.pos.x, this.pos.y));
    force.normalize();
    force.mult(forceMag);

    this.applyForce(force);
  }

  applyForce(force) {
    let acc = createVector(force.x/this.mass, force.y/this.mass);
    this.vel.add(acc);
  }
}
