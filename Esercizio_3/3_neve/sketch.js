const snowflakes = [];
const ground = [];

const minSpeed = 1;
const maxSpeed = 5;

function setup() {
  createCanvas(900, 400);
  noSmooth();
  stroke(255);
  fill(255);

  for(let i = 0; i < 100; i++){
    snowflakes.push(createVector(
      random(width), random(height),
      random(minSpeed, maxSpeed)));
  }

  for(let x = 0; x < width; x++) {
    ground[x] = height;
  }
}

function draw() {
  background(0, 0, 32);

  for(const snowflake of snowflakes) {
    snowflake.y += snowflake.z;

    ellipse(snowflake.x, snowflake.y, 5, 5);

    if(snowflake.y >= ground[floor(snowflake.x)]) {
      ground[floor(snowflake.x)]--;

      snowflake.x = random(width);
      snowflake.y = 0;
    }
  }

  for(let x = 0; x < width; x++) {
    ellipse(x, ground[x], 5, height - ground[x]);
  }
}

function mousePressed() {
  snowflakes.push(createVector(mouseX, mouseY,
                               random(minSpeed, maxSpeed)));
}

function mouseDragged() {
  snowflakes.push(createVector(mouseX, mouseY,
                               random(minSpeed, maxSpeed)));
}