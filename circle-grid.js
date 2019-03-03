function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (var j = 40; j <= 385; j = j + 40) {
    for (var i = 40; i <= 385; i = i + 40) {
      ellipse(i, j, 20);
    }
  }
}
