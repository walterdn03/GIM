function setup() {
	// Crea il canvas utilizzando le dimensioni della finestra
	createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	// Ottieni l'ora, i minuti, i secondi e i millisecondi attuali
	let h = hour();
	let m = minute();
	let s = second();
	let ms = new Date().getMilliseconds();
  
	// Calcola gli angoli per le ore, i minuti e i secondi
	let angolo_h = TWO_PI / 12 * h + TWO_PI / 12 / 60 * m;
	let angolo_m = TWO_PI / 60 * m;
	let angolo_s = TWO_PI / 60 * s + TWO_PI / 60 * ms / 1000;
  
	// Imposta lo sfondo
	background(224);
  
	// Sposta l'origine al centro del canvas
	translate(width / 2, height / 2);
	// Scala il disegno
	scale(0.8);
  
	// Disegna il bordo esterno dell'orologio
	noStroke();
	fill(255);
	ellipse(0, 0, 440, 440);
  
	// Disegna i segni dei minuti sull'orologio
	fill(0);
	push();
	for (let i = 0; i < 60; i++) {
	  if (i % 5 == 0) {
		rect(-7, -210, 14, 50);
	  } else {
		rect(-3, -210, 6, 16);
	  }
	  rotate(TWO_PI / 60);
	}
	pop();
  
	fill(0);
  
	// Ruota il disegno in base all'angolo delle ore e disegna il rettangolo delle ore
	push();
	rotate(angolo_h);
	rect(-12, 40, 24, -160);
	pop();
  
	// Ruota il disegno in base all'angolo dei minuti e disegna il rettangolo dei minuti
	push();
	rotate(angolo_m);
	rect(-9, 36, 18, -235);
	pop();
  
	// Ruota il disegno in base all'angolo dei secondi e disegna il rettangolo dei secondi e il cerchio dei secondi
	fill(255, 0, 0);
	push();
	rotate(angolo_s);
	rect(-2, 40, 4, -180);
	ellipse(0, -140, 40, 40);
	pop();
  }
  
  function windowResized() {
	// Ridimensiona il canvas quando la finestra viene ridimensionata
	resizeCanvas(windowWidth, windowHeight);
  }
  