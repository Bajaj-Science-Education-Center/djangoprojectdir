class GoldAtom {

  constructor(x, y, r, r2, c) {
    this.pos = createVector(x, y);
    this.radius = r;
    this.outerRadius = r2;
    this.charge = c;
  }

  show() {
    fill("#293462");
    stroke("#216583");
    strokeWeight(3);
    ellipse(this.pos.x, this.pos.y, this.radius, this.radius);

    fill(0, 0, 0, 0);
    stroke("#216583");
    strokeWeight(1);
    ellipse(this.pos.x, this.pos.y, this.outerRadius, this.outerRadius);
  }

}
