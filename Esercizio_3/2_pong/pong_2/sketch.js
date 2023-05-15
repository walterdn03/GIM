let posizioneY
let posizioneX
let velX
let velY
let dimensione = 50 // dimensione iniziale dell'ellisse
let tempoTrascorso = 0 // inizializzo il conteggio del tempo a 0

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

  // Controllo se sono trascorsi almeno 5 secondi
  if (tempoTrascorso >= 15) {
    ellipse(posizioneX, posizioneY, dimensione, dimensione)
    dimensione += 1 // incremento la dimensione di 1 ad ogni ciclo
  } else { //se la condizione è falsa si usa else per far procedere la funzione in altro modo
    // Se non sono trascorsi 5 secondi, uso il sinusoide come prima
    ellipse(posizioneX, posizioneY, dimensione * sin(frameCount * 0.05) + dimensione, dimensione * sin(frameCount * 0.05) + dimensione)
  }

  posizioneX = posizioneX + velX 
  posizioneY = posizioneY + velY

  if(posizioneX >= width || posizioneX <= 0 ) velX = -velX
  if(posizioneY >= height || posizioneY <= 0 ) velY = -velY

  tempoTrascorso += deltaTime/1000 // aggiorno il conteggio del tempo
}

function keyPressed(){
  if(keyCode === 32){ // Controllo se la barra spaziatrice è stata premuta
    dimensione -= 10 // Imposto la dimensione a un valore minore
  }
}
