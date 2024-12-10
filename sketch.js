let bgColor;
let bgChangeTime = 5000; // Time in milliseconds to change background
let lastBgChange = 0;

function setup() {
  createCanvas(400, 400);
  bgColor = color(220);
}

function draw() {
  // Change background color every 5 seconds
  if (millis() - lastBgChange > bgChangeTime) {
    bgColor = color(random(255), random(255), random(255));
    lastBgChange = millis();
  }
  background(bgColor);

  // ANA MARIA: Draw an AMAZING RECTANGLE with dynamic colors
  fill(random(255), random(255), random(255));
  stroke(random(255), random(255), random(255));
  strokeWeight(5);
  rect(200, 80, 200, 80);

  // ELLA: Draw a HUGE SQUASHED CIRCLE with pulsating effect
  fill('pink');
  stroke('black');
  strokeWeight(3);
  let squashFactor = sin(frameCount * 0.05) * 20; // Makes it squash dynamically
  ellipse(170, 250, 400 + squashFactor, 100 - squashFactor);

  // NAOMI: Draw a FUNKY FISH with animated tail
  drawFunkyFish(200, 200);

  // Aryana: Add background color-changing effects dynamically!
}

function drawFunkyFish(x, y) {
  // Fish body
  fill(random(100, 255), random(100, 255), 255);
  noStroke();
  ellipse(x, y, 150, 80);

  // Animated tail
  let tailWiggle = sin(frameCount * 0.1) * 10;
  fill(random(100, 255), random(100, 255), 255);
  triangle(x - 70, y, x - 140 - tailWiggle, y - 40, x - 140 - tailWiggle, y + 40);

  // Eye
  fill(0);
  ellipse(x + 30, y - 20, 15, 15);
  fill(255);
  ellipse(x + 32, y - 22, 5, 5);

  // Funky patterns on the body
  fill(random(255), random(255), random(255));
  ellipse(x - 20, y - 10, 20, 10);
  ellipse(x + 10, y + 10, 20, 10);
}
