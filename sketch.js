function setup() {
  createCanvas(400, 400);
}

function draw() {
   // Background changes color every 5 seconds
   let t = millis();
   if (t % 10000 < 5000) {
     background(150, 200, 255); // Light blue (daytime)
   } else {
     background(30, 30, 100); // Dark blue (nighttime)
   }

  // ANA MARIA DRAW AN AMAZING RECTANGLE
  fill('red');
  stroke('yellow');
  rect(200,80,200,80);

  //ELLA DRAW A HUGE CIRCLE AND MAKE IT SQUASHED
  fill('pink');
  stroke('black');
  ellipse(170,250,400,100);
  
  //NAOMI DRAW A FISH 
  fill(100, 200, 255);
  noStroke();
  ellipse(200, 200, 150, 80);


  fill(100, 200, 255);
  noStroke();
  triangle(120, 200, 50, 160, 50, 240);

  fill(0);
  ellipse(230, 180, 15, 15);

  // Draw kelp (added for this task)
  drawKelp(50, 300, color(34, 139, 34)); // Left kelp
  drawKelp(350, 350, color(50, 200, 50)); // Right kelp
}
function drawKelp(baseX, baseY, kelpColor) {
  fill(kelpColor);
  noStroke();
  let numLeaves = 8;
  let stemHeight = 200;

  for (let i = 0; i < numLeaves; i++) {
    let xOffset = sin(frameCount * 0.02 + i) * 10;
    ellipse(baseX + xOffset, baseY - i * (stemHeight / numLeaves), 20, 40);
  }
  // Aryana make the background change colour after 5 seconds
}
