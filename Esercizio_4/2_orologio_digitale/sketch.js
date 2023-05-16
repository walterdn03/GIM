function setup() {
	createCanvas(400, 400);
  }
  
  function draw() {
	let ora = hour() + ":" + minute() + ":" + (second() < 10 ? "0" + second() : second());
  
	background(255, 0, 0);
  
	textSize(40);
	textFont("monospace");
	textAlign(CENTER, CENTER);
	text(ora, width / 2, height / 2);
  }
  