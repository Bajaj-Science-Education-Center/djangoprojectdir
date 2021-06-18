class Coil {
  constructor(K, l, x) {
    this.k = K;
    this.mean_length = l;
    this.displacement = x;
  }

  getForce() {
    return(this.k * this.displacement);
  }

  update(x) {
    this.displacement = x;
  }

  show() {
    
  }
}
