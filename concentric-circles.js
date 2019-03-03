function setup() {
  createCanvas(400, 400);
  //colorMode(HSB);
}

function draw() {
  background(220);
  for (var i = 10; i <= 390; i = i + 10) {
    ellipse(200, 200, i);
    fill(0, 0, 0, 0);
    
  }
}
