
let posizioneY
let posizioneX
let velX
let velY

function setup(){
	createCanvas(900, 500)
	posizioneX = width/2
	posizioneY = height/2
	velX = random (-4,4)
	velY = random(-4,4)
	background(250, 50, 40)
	
}


function draw(){

	fill (random(255), random(55), random(55))
	ellipse(posizioneX, posizioneY, 120, 120)

	posizioneX = posizioneX + velX 
	posizioneY = posizioneY + velY

	if(posizioneX >= width || posizioneX <= 0 ) velX = -velX
	if(posizioneY >= height || posizioneY <= 0 ) velY = -velY
}

function keyPressed(){
	save("pong.png")
}

