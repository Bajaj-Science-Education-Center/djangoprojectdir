class Mass {
  constructor(x, y, s, m) {
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);

    this.side_length = s;
    this.mass = m;
  }

  update(force) {
    let acceleration = force / this.mass;
    let frictionalAcc = this.mass * g * FRICTION;

    if(this.velocity.x == 0) {
      frictionalAcc = 0;
    } else if(this.velocity.x > 0) {
      frictionalAcc *= -1;
    }

    this.velocity.x += acceleration + frictionalAcc;
    this.position.x += this.velocity.x;
  }

  show() {
    stroke("#216583");
    fill("#293462");
    rect(this.position.x, this.position.y - this.side_length/2, this.side_length, this.side_length);
  }
}
