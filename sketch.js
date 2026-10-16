function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
  // put setup code here

  background('black');

  fill('white');
  textAlign(CENTER, CENTER);
  textSize(18);
  textFont('Georgia');
  const message = "Flowers";
  text(message, width / 2, height / 2);

  drawFlower();
}

function draw() {
  // put drawing code here
}

function drawFlower () {
push();

translate(random(windowWidth), random(windowHeight));

//disco esterno
let numPetals = random(4, 16);

colorMode(HSB, 360, 100, 100); //sistema per i colori
let colPetals = random(0, 360);

let widthPetals = random(20, 150);
let heightPetals = random(5, 60);

  noStroke();
  fill(colPetals, 100, 100);
  
  for(let i = 0; i<numPetals; i++) { 
    push();

    let angle = (TWO_PI / numPetals)*i;
    rotate(angle);
    ellipse(40, 0, widthPetals, heightPetals);
    
    pop(); 
  }

  //disco interno
  noStroke();
  fill(43, 80, 90);
  circle(0, 0, 30);

  pop();
}
