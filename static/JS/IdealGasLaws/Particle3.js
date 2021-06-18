class Particle {

  constructor(x, y, vx, vy, r) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);

    this.radius = r;
  }

  show() {
    strokeWeight(1);
    stroke("#216583");
    fill(41, 52, 98, 255 - (temperature/10 * 255));

    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
  }

  update(b) {
    this.vel.normalize();
    this.vel.mult(temperature);
    this.pos.add(this.vel);

    if(this.pos.x > b.maxX) {
      this.pos.x = b.maxX;
      this.vel.x *= -1;
      collisions++;
    }

    if(this.pos.x < b.minX) {
      this.pos.x = b.minX;
      this.vel.x *= -1;
      collisions++;
    }

    if(this.pos.y > b.maxY) {
      this.pos.y = b.maxY;
      this.vel.y *= -1;
      collisions++;
    }

    if(this.pos.y < b.minY) {
      this.pos.y = b.minY;
      this.vel.y *= -1;
      collisions++;
    }
  }
}
