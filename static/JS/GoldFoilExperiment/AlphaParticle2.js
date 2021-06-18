class AlphaParticle {

  constructor(x, y, vx, vy, r, c) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);

    this.radius = r;
    this.charge = c;
  }

  show() {
    fill("#F76262");
    //stroke("#216583");
    //strokeWeight(1);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }

  update(atoms) {
    for(let i = 0; i < atoms.length; i++) {
      this.applyForce(atoms[i]);
    }

    this.pos.add(this.vel);
  }

  applyForce(a) {
    let rSquared = pow(a.pos.x - this.pos.x, 2) + pow(a.pos.y - this.pos.y, 2);
    let mag = ELECTROSTATIC_CONSTANT * this.charge * a.charge / rSquared;

    let direction = createVector(this.pos.x - a.pos.x, this.pos.y - a.pos.y);
    direction.normalize();
    direction.mult(mag);

    this.vel.add(direction);
  }

}
