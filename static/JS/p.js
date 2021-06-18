class Particle {

  constructor(x, y, t, mag, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(mag * cos(t), mag * sin(t));

    this.theta = t;
    this.magnitude = mag;

    this.radius = r;
  }

  show() {
    fill(255, 241, 193, 50);
    noStroke();
    //ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }

  update(boundary, size) {
    if(this.pos.x > boundary.x + size.x) {
      this.pos.x = boundary.x + size.x;
      this.vel.x *= -1;
    } else if(this.pos.x < boundary.x) {
      this.pos.x = boundary.x;
      this.vel.x *= -1;
    }

    if(this.pos.y > boundary.y + size.y) {
      this.pos.y = boundary.y + size.y;
      this.vel.y *= -1;
    } else if(this.pos.y < boundary.y) {
      this.pos.y = boundary.y;
      this.vel.y *= -1;
    }

    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
}
