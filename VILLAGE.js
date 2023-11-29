//house function

function drawHouse(x, y) {
  push();
  translate(x, y);
  scale(0.2);
  // roof
  stroke(0);
  
  fill(150, 100, 50);
  triangle(75, 150, 327, 152, 200, 40);

  // house
  fill(190, 160, 130);
  rect(75, 150, 250, 250);

  // door
  fill(150, 100, 50);
  rect(150, 250, 75, 150);

  // door knob
  fill(0);
  noStroke();
  ellipse(160, 330, 10, 10);
  pop();
}

function drawVendorHouse(x, y) {
  push();
  scale(3);
  drawHouse(x / 3, y / 3);
  fill(0);
  rect(x / 3 + 30, y / 3 + 50, 15, 29);
  pop();
}

//village function

function drawVillage(x, y, houseRows) {
  for (i = 0; i < houseRows + 2; i++) {
    drawHouse(x, y);
    x += 60;
  }
  x = 0;
  y += 200;
  drawHouse(x, y);

  for (i = 0; i < houseRows; i++) {
    drawHouse(x, y);
    x += 70;
  }

  x = 0;
  y += 160;
  drawHouse(x, y);

  for (i = 0; i < houseRows + 3; i++) {
    drawHouse(x, y);
    x += 80;
  }
}
