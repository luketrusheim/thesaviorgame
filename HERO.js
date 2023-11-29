const Standard = 0;
const GoblinTime = 1;

let HeroMode = Standard;

// making hero object
function HERO(x, y, speed) {
  // hero x and y
  this.x = x;
  this.y = y;
  

  // hero movement speed
  this.speed = speed;

  // hero health
  this.health = 100;

  // hero update (movement) function
  this.update = function () {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      this.xNew = this.x - this.speed;
      if(barrierState != horizontalCOLLIDE || this.y != this.yNew){
        this.x = this.xNew
      }
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
       this.yNew = this.y - this.speed;
      if(barrierState != horizontalCOLLIDE || this.x != this.xNew) {
        this.y = this.yNew
    }
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      this.xNew = this.x + this.speed;
      if(barrierState != horizontalCOLLIDE || this.y != this.yNew ){
        this.x = this.xNew
    }
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      this.yNew = this.y + this.speed;
      if(barrierState != horizontalCOLLIDE || this.x != this.xNew){
        this.y = this.yNew
    }
  }
  }

  // hero draw function
  this.draw = function () {
    if (HeroMode == GoblinTime) {
      fill(50, 180, 70);
    } else {
      // drawing blue cirlce
      fill(0, 0, 255);
    }
    ellipse(this.x, this.y, 30);

    // drawing black health bar
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(15);
    text(this.health, this.x, this.y + 25);
  };

  this.healthBar = function () {
    push();

    //set intial color of health bar
    fill(0, 255, 0);

    //make inside health bar rectangle have no stroke
    noStroke();

    //change color of health bar
    if (this.health <= 75 && this.health > 50) fill(200, 200, 50);
    else if (this.health <= 50 && this.health > 25) fill(255, 150, 0);
    else if (this.health <= 25 && this.health > 0) fill(200, 50, 50);

    //moving rectangle to represent health
    if (this.health > 0)
    rect(20, 25, 200 - (100 - this.health) * 2, 45);

    //text that displays health
    fill(0);
    textSize(30);
    text(round(this.health), 55, 50);

    //border
    stroke(0);
    strokeWeight(4);
    noFill();
    rect(20, 25, 200, 45);
    pop();
  };

  this.damageIndicator = function () {
    if (takingDamage == true) {
      for (i = 0; i < 255; i++) {
        push();
        stroke(255, 0, 0, 255 - i);
        noFill();
        circle(500, 500, 1450 - i);
        pop();
      }
    }
  };
  

  //death screen
  this.healthDeath = function () {
    if (this.health < 1) {
      fill(0);
      rect(0, 0, 1000, 1000);
      textFont("Algerian");
      textSize(80);
      fill(200, 50, 50);
      text("YOU DIED!", 500, 400);
      textSize(40);
      text("Press R to reset", 500, 500);
      
    }
  };

}