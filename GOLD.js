let coins = 0
let goldAdded = []

function currency(){
  drawCounter()
  drawTally()
}

function drawCounter(){
  push()
  fill("gold");
  for (i = 0; i < coins/5; i++) ellipse(893, 70 - 5 * i, 40, 20);
  pop()
}

function drawTally(){
  push()
  fill("gold")
  rectMode(RADIUS);
  rect(950,55, 30)
  stroke(2)
  fill(255);
  textSize(40);
  text(coins, 950, 55);
  pop()
}
