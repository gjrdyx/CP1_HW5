function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(255);
  for (var j = 50; j <= 375; j = j + 75) {
    for (var i = 10; i <= 65; i = i + 15) {
      rect(j, 200, i, i);
      fill(0, 0, 0, 0);
    }
  }
}
