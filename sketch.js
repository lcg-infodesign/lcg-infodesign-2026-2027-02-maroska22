function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log('p5.js version:', p5.VERSION);
  // put setup code here

  background('black');

  //parola al centro
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(18);
  textFont('Georgia');
  const message = "Flowers";
  text(message, width / 2, height / 2);

 //disposizione circolare 
  let xCorrent = width/2;
  let yCorrent = height/2; 

  let numRings = random(3, 10);
  let distRings = random(50, 150); 

  for (let ring = 1; ring <= numRings; ring++){
    let r = ring*distRings; //raggio per ogni anello
    let numFlowers = ring*6; //numero di fiori per ogni anello
    for (let i=0; i<numFlowers; i++){
      let angleF = (TWO_PI / numFlowers)*i; //fiori equidistanziati
      drawFlower(xCorrent + cos(angleF)*r, yCorrent + sin(angleF)*r, distRings);
    }
  }
}

function draw() {
  // put drawing code here
}

function drawFlower (x, y, d) {
push();

translate(x, y);

//disco esterno
let numPetals = floor(random(4, 10)); //arrotonda per difetto

colorMode(HSB, 360, 100, 100); //sistema per i colori
let colPetals = random(0, 360);

let widthPetals = random(20, (d/2)-5); //la larghezza dei petali deve dipendere dalla distanza fra gli anelli
let heightPetals = random(5, 30);

  noStroke();
  fill(colPetals, 100, 100);
  
  for(let i = 0; i<numPetals; i++) { 
    push();

    let angleP = (TWO_PI / numPetals)*i; //petali equidistanziati
    rotate(angleP);
    ellipse((d/4), 0, widthPetals, heightPetals); //la posizione dell'ellisse deve dipendere dalla distanza fra gli anelli
    
    pop(); 
  }

  //disco interno
  noStroke();
  fill(43, 80, 90);
  circle(0, 0, 20);

  pop();
}
