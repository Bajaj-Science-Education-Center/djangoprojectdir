class SpringSystem {
  constructor(x, y, s, m, K, l, d) {
    this.start = createVector(x, y);

    this.mass = new Mass(x+l+d, y, s, m);
    this.coil = new Coil(K, l, d);
  }

  update() {
    console.log(this.mass);
    let displacement = this.coil.mean_length - (this.mass.position.x - this.start.x);
    this.coil.update(displacement);
    this.mass.update(this.coil.getForce());
  }

  show() {
    this.coil.show();
    this.mass.show();

    stroke("#216583");
    line(this.start.x, this.start.y, this.mass.position.x, this.mass.position.y);
  }
}
