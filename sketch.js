function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // ANA MARIA DRAW AN AMAZING RECTANGLE
  fill('red');
  stroke('yellow');
  rect(200,80,200,80);

  //ELLA DRAW A HUGE CIRCLE AND MAKE IT SQUASHED
  ellipse(500,500,100,400);
  
  //NAOMI DRAW A FISH 
  fill(100, 200, 255);
  noStroke();
  ellipse(200, 200, 150, 80);


  fill(100, 200, 255);
  noStroke();
  triangle(120, 200, 50, 160, 50, 240);

  fill(0);
  ellipse(230, 180, 15, 15);

  // Aryana make the background change colour after 5 seconds
}
