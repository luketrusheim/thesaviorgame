let PotionAppear = true;
let PowerOrb = true;
let SwordAppear = true;

function collectableItem(itemX, itemY, objectName) {
  if (30 > dist(hero.x, hero.y, itemX, itemY)) {
    if (keyIsDown(69)) {
      //p
      objectName = false;
    }
  }
}

function powerOrb(xpos, ypos, size, objectName) {
  if (30 > dist(hero.x, hero.y, xpos, ypos)) {
    if (keyIsDown(69)) {
      PowerOrb = false;
    }
  }
  if (PowerOrb == true) {
    push();
    noStroke();
    scale(size);
    for (var i = 0; i <= 255; i++) {
      fill(0, i, i);
      ellipse((xpos * 1) / size, (ypos * 1) / size, 255 - i, 255 - i);
    }
    textSize(50);
    textFont('algerian');
    fill(0);
    text('ORB', 940, 2000);
    pop();
  }
}

function winGame() {
  if (PowerOrb == false) {
    fill(25);
    rect(0, 0, 1000, 1000);
    textFont("algerian");
    textSize(70);
    fill(100, 250, 50);
    text("Congratulations! ", 500, 400);
    text("You saved the village! ", 510, 500);
    textSize(50);
    text("Press R to reset", 500, 600);
  }
}

/*
function potion(itemX, itemY) {
  if (30 > dist(hero.x, hero.y, itemX, itemY)) {
    if (keyIsDown(69)) {
      //p
      PotionAppear = false;
      HeroMode = GoblinTime;
    }
  }
  if (PotionAppear == true) {
    push();
    noStroke(0);
    fill(80, 180, 100);
    ellipse(itemX, itemY, 20, 24);
    rect(itemX - 3, itemY - 30, 7, 30);
    pop();
  }
}
*/
function betterSword(itemX, itemY) {
  if (30 > dist(hero.x, hero.y, itemX + 2.5, itemY + 45)) {
    if (keyIsDown(69)) {
      if (coins >= 10) {
        if (SwordAppear) {
          SwordAppear = false;
          coins -= 10;
        } 
      }
        if (coins < 10){
          push()
          fill(0)
          textSize (15)
          text("You have not enough coin!",500,150)
          text("Please obtain at least 10 shekels.",500,170)
          pop()
        }
    }
  }

  if (SwordAppear == true) {
    push();
    translate(itemX, itemY);
    fill("silver");
    rect(0, 0, 5, 90);
    rect(-10, 65, 25, 5);
    fill("gold");
    rect(0, 70, 5, 20);
    textSize(14);
    fill(0);
    text('Iron Sword', 0, 110);
    pop();
  }
}


