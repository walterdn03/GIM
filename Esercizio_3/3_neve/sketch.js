const snowflakes = [];  // Array che conterrà gli oggetti rappresentanti i fiocchi di neve
const ground = [];  // Array che rappresenta il terreno

const minSpeed = 1;  // Velocità minima di caduta dei fiocchi di neve
const maxSpeed = 5;  // Velocità massima di caduta dei fiocchi di neve

function setup() {
  createCanvas(800, 400);  // Creazione del canvas con dimensioni pari a quelle della finestra
  noSmooth();  // Disabilita l'antialiasing
  stroke(255);  // Imposta il colore dei contorni a bianco
  fill(255);  // Imposta il colore di riempimento a bianco

  // Genera 100 fiocchi di neve posizionati casualmente nello schermo con velocità casuali
  for (let i = 0; i < 100; i++) {
    snowflakes.push(createVector(
      random(width), random(height),
      random(minSpeed, maxSpeed)
    ));
  }

  // Inizializza l'array ground con un valore pari all'altezza del canvas per ogni pixel
  for (let x = 0; x < width; x++) {
    ground[x] = height;
  }
}

function draw() {
  background(0, 0, 32);  // Sfondo blu scuro

  // Per ogni fiocco di neve nell'array snowflakes
  for (const snowflake of snowflakes) {
    snowflake.y += snowflake.z;  // Aggiorna la posizione verticale del fiocco di neve in base alla sua velocità

    ellipse(snowflake.x, snowflake.y, 5, 5);  // Disegna un cerchio rappresentante il fiocco di neve

    // Se il fiocco di neve raggiunge o supera il terreno in corrispondenza della sua posizione orizzontale
    if (snowflake.y >= ground[floor(snowflake.x)]) {
      ground[floor(snowflake.x)]--;  // Riduci l'altezza del terreno in quella posizione
      
      snowflake.x = random(width);  // Reimposta la posizione orizzontale del fiocco di neve a una posizione casuale
      snowflake.y = 0;  // Reimposta la posizione verticale del fiocco di neve in cima allo schermo
    }
  }

  // Disegna una serie di colonne verticali rappresentanti il terreno
  for (let x = 0; x < width; x++) {
    //ellipse(x, ground[x], 5, height - ground[x]);
    ellipse(x, ground[x], 5, 5);
  }
}

function mousePressed() {
  // Aggiungi un nuovo fiocco di neve nella posizione del mouse con velocità casuale
  snowflakes.push(createVector(mouseX, mouseY, random(minSpeed, maxSpeed)));
}

function mouseDragged() {
  // Aggiungi un nuovo fiocco di neve nella posizione del mouse con velocità casuale durante il trascinamento del mouse
  snowflakes.push(createVector(mouseX, mouseY, random(minSpeed, maxSpeed)));
}
