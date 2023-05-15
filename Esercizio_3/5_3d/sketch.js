function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw(){

  background(0)

  rotateX(mouseY*0.01)
  rotateY(mouseX*0.01)

  let lato = 500

  if (mouseIsPressed) randomSeed(0)

  for(let i=0; i<100; i=i+1) {
      let spessore = random (1,3)
      let lunghezza = random (20,100)
      let posX = random (-lato, lato)
      let posY = random (-lato, lato)
      let posZ = random (-lato, lato)
      stroke(255)
      //strokeWeight (spessore)
      line(posX, posY, posZ, posX, posY+ lunghezza, posZ)  
  }

}