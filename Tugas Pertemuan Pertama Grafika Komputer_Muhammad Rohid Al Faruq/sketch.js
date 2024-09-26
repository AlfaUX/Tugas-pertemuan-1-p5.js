function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(255,0,0);

  star1(320, 240, 100);
}

function star1(x, y, size) {
  let outerRadius = size;
  let innerRadius = size / 2;   
  let points = 3;              
  let angleStep = TWO_PI / points; 
  
  fill(255, 255, 255);
  strokeWeight(0);

  beginShape();
  
  for (let i = 0; i < TWO_PI; i += angleStep) {

    let outerX = x + cos(i) * outerRadius;
    let outerY = y + sin(i) * outerRadius;
    vertex(outerX, outerY);

    let innerX = x + cos(i + angleStep / 2) * innerRadius;
    let innerY = y + sin(i + angleStep / 2) * innerRadius;
    vertex(innerX, innerY);
  }
  
  endShape(CLOSE);
}
