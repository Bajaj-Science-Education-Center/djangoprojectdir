class ParticleBlock {

  constructor(n, x, y, sx, sy) {
    this.num = n;
    this.particles = [];

    this.boundary = createVector(x, y);
    this.size = createVector(sx, sy);

    for(let i = 0; i < this.num; i+=1) {
      this.particles.push(new Particle(random(this.boundary.x, this.boundary.x + this.size.x), random(this.boundary.y, this.boundary.y + this.size.y), random(0, TWO_PI), random(0.1, 0.3), 5));
    }

    console.log(this.num);
  }

  run() {
    for(let i = 0; i < this.num; i+=1) {
      this.particles[i].show();
      this.particles[i].update(this.boundary, this.size);
    }
    //console.log("Run");
  }

  drawStrokes() {
    stroke('rgba(255, 241, 193, 0.25)');
    for(let i = 0; i < this.num-1; i+= 1) {
      for(let j = i+1; j < this.num; j+=1) {
        line(this.particles[i].pos.x, this.particles[i].pos.y, this.particles[j].pos.x, this.particles[j].pos.y);
      }
    }

    /*line(this.boundary.x, this.boundary.y, this.boundary.x + this.size.x, this.boundary.y);
    line(this.boundary.x + this.size.x, this.boundary.y, this.boundary.x + this.size.x, this.boundary.y + this.size.y);
    line(this.boundary.x + this.size.x, this.boundary.y + this.size.y, this.boundary.x, this.boundary.y + this.size.y);
    line(this.boundary.x, this.boundary.y + this.size.y, this.boundary.x, this.boundary.y);*/

    //console.log("Strokes");
  }
}
