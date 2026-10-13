function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
  // put setup code here
  const message =
    "Flower";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);

  drawFlower(8, 'red');
}

function draw() {
  // put drawing code here
}

//prova disegno fiorellino
function drawFlower (n, c) {
push();

translate(random(windowWidth), random(windowHeight));

//disco esterno
let numPetals = n;
let colPetals = c;

  noStroke();
  fill(colPetals);
  
  for(let i = 0; i<numPetals; i++) { 
    push();

    let angle = TWO_PI / numPetals*i;
    rotate(angle);
    ellipse(0, 40, 30, 80);
    
    pop(); 
  }

  //disco interno
  noStroke();
  fill('yellow');
  circle(0, 0, 30);

  pop();
}
