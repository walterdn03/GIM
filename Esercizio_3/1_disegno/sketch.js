function setup(){
	createCanvas(400, 400)
}

function draw(){
	background(200)

	point(30,50)  //istruzione +  parametri
	point(0,0)
	point(31,50)

	strokeWeight(7)
	fill(255,0,0)	//imposto fill prima della forma
	rect(100,120, 100,100)	//all'inizio xy e poi base + altezza
	
	line(50,60, 200,280)	//xy punto di partenza + xy punto di arrivo
	
	strokeWeight(3)
	rect(150,150, 100,100)

	//in base a come scrivo il codice visualizzerò prima una cosa e poi l'altra
	fill(0,190,220, 128) //ultimo parametro è opacità
	ellipse(180,280, 90,90)

	noFill()
	triangle(310,90, 390,160, 210,180)
}