function setup() {
	createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	let m = minute();
	let h = hour();
	let s = second();
	let ms = new Date().getMilliseconds();
  
	let angolo_h = TWO_PI / 12 * h + TWO_PI / 12 / 60 * m;
	let angolo_m = TWO_PI / 60 * m;
	let angolo_s = TWO_PI / 60 * s + TWO_PI / 60 * ms / 1000;
  
	background(000);
  
	translate(width / 2, height / 2);
	scale (0.9)
  
	fill(300);
	ellipse(0, 0, 400, 400);
  
	// Linee dei minuti
	stroke(0);
	strokeCap(SQUARE); // Imposta il tipo di cap degli spigoli delle linee a square
	for (let i = 0; i < 60; i++) {
	  let angolo = TWO_PI / 60 * i;
	  let raggioEsterno = 180;
	  let raggioInterno = 160;
  
	  if (i % 5 === 0) {
		strokeWeight(9);
		raggioInterno = 150;
	  } else {
		strokeWeight(4);
	  }
  
	  let x1 = cos(angolo) * raggioEsterno;
	  let y1 = sin(angolo) * raggioEsterno;
	  let x2 = cos(angolo) * raggioInterno;
	  let y2 = sin(angolo) * raggioInterno;
	  line(x1, y1, x2, y2);
	}
  
	// lancetta ore
	push();
	rotate(angolo_h);
	fill(0, 0, 0);
	rect(-5, 40, 24, -170);
	pop();
  
	// lancetta minuti
	push();
	rotate(angolo_m);
	fill(0, 0, 0);
	rect(-5, 36, 18, -205);
	pop();
  
	// lancetta secondi
	noStroke()
	push();
	rotate(angolo_s);
	fill(255, 0, 0);
	rect(-2, 40, 4, -160);
	ellipse(0, -130, 40, 40);
	pop();
  
	noFill();
	noStroke();
	ellipse(0, 0, 10);
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  