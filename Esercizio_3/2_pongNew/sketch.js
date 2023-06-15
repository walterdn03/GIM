let balls = [];
let velocity;
let maxSpeed;
let trail = [];
let isMouseMoving = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  velocity = createVector(3, 3);
  maxSpeed = 10;

  // Crea una nuova pallina ogni 3 secondi
  setInterval(createNewBall, 3000);
}

function createNewBall() {
  if (balls.length < 20) {
    balls.push({
      position: createVector(width / 2, height / 2),
      trail: []
    });
  }
}

function draw() {
  background(0, 10); // Opacità bassa per creare l'effetto di dissolvenza

  // Aggiorna e disegna tutte le palline
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];

    // Aggiungi la posizione attuale della pallina alla coda (trail)
    ball.trail.push(createVector(ball.position.x, ball.position.y));

    // Limita la lunghezza della coda a un certo numero di elementi
    if (ball.trail.length > 100) {
      ball.trail.splice(0, 1);
    }

    // Disegna la coda
    for (let j = 0; j < ball.trail.length; j++) {
      let alpha = map(j, 0, ball.trail.length - 1, 255, 0); // Opacità graduale
      let colorValue = map(j, 0, ball.trail.length - 1, 0, 255); // Gradiente di colore
      let fillColor = color(colorValue, 0, 255);
      fillColor.setAlpha(alpha);
      fill(fillColor);
      noStroke();
      ellipse(ball.trail[j].x, ball.trail[j].y, 40, 40);
    }

    // Aggiorna la posizione della pallina in base alla velocità
    ball.position.add(velocity);

    // Rimbalzo sui bordi
    if (ball.position.x < 0 || ball.position.x > width) {
      velocity.x *= -1;
    }
    if (ball.position.y < 0 || ball.position.y > height) {
      velocity.y *= -1;
    }
    
    // Limita la posizione della pallina entro i bordi
    ball.position.x = constrain(ball.position.x, 0, width);
    ball.position.y = constrain(ball.position.y, 0, height);

    // Movimento fluido basato sulla posizione del mouse o movimento casuale
    if (isMouseMoving) {
      let targetY = constrain(mouseY, 0, height);
      let acceleration = (targetY - ball.position.y) * 0.1;
      velocity.y += acceleration;
      velocity.y = constrain(velocity.y, -maxSpeed, maxSpeed);
    } else {
      velocity.add(createVector(random(-0.2, 0.2), random(-0.2, 0.2)));
      velocity.limit(maxSpeed);
    }

    // Disegna la pallina
    fill(255);
    ellipse(ball.position.x, ball.position.y, 40, 40);
  }
}

function mouseMoved() {
  isMouseMoving = true;
}

function mouseReleased() {
  isMouseMoving = false;
}