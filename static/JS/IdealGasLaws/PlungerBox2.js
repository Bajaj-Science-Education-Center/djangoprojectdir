class PlungerBox {

  constructor(a, b, c, d, o) {
    this.maxX = a;
    this.maxY = b;
    this.minX = c;
    this.minY = d;

    this.offset = o;

    this.minMinY = d;
  }

  show() {
    strokeWeight(10);
    stroke("#216583");
    line(this.maxX, this.minY, this.maxX, this.maxY);
    line(this.maxX, this.maxY, this.minX, this.maxY);
    line(this.minX, this.maxY, this.minX, this.minY);
    line(this.minX, this.minY, this.maxX, this.minY);
  }

  update() {
    this.minY = this.minMinY - height_offset;
  }
}
