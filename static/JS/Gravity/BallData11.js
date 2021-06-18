class BallData {
  /*constructor(vx1, vy1, m1, r1, rad1, vx2, vy2, m2, r2, rad2, ball) {
    this.velXslider = vx1;
    this.velYslider = vy1;
    this.massSlider = m1;
    this.restitutionSlider = r1;
    this.radiusSlider = rad1;

    this.velXvalue = vx2;
    this.velYvalue = vy2;
    this.massValue = m2;
    this.restitutionValue = r2;
    this.radiusValue = rad2;

    this.ball = ball;
  }*/

  constructor() {
    /*this.velXslider = null;
    this.velYslider = null;
    this.massSlider = null;
    this.restitutionSlider = null;
    this.radiusSlider = null;

    this.velXvalue = null;
    this.velYvalue = null;
    this.massValue = null;
    this.restitutionValue = null;
    this.radiusValue = null;*/
  }

  manageControlPanel() {

    this.velXvalue.innerHTML = Number(this.velXslider.value)/100;
    this.velYvalue.innerHTML = Number(this.velYslider.value)/100;
    this.massValue.innerHTML = Number(this.massSlider.value);
    this.restitutionValue.innerHTML = Number(this.restitutionSlider.value)/100;
    this.radiusValue.innerHTML = Number(this.radiusSlider.value);
  }

  updateConstants(ball) {

    ball.vel.x = Number(this.velXslider.value)/(ts*100);
    ball.vel.y = Number(this.velYslider.value)/-(ts*100);
    ball.mass = Number(this.massSlider.value);
    ball.restitution = Number(this.restitutionSlider.value);
    ball.radius = Number(this.radiusSlider.value);
  }


}
