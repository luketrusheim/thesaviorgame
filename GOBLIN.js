let goblins = [];
let takingDamage = false;
let goblinColliding = [];
let goblinLines = [];
goblinLines[0] = "GRR...";
goblinLines[1] = "ARGH!";
goblinLines[2] = "*shrieks*";
goblinLines[3] = "*shrieks LOUDLY*";
goblinLines[4] = "HISS!";

// making goblin object
function GOBLIN(x, y, health, line) {
  this.goblinLine = line;

  this.speed = random(0.5, 2);

  this.swordDamage = 1;

  this.goldCounted = false;

  // goblin x and y
  this.x = x;
  this.y = y;

  // goblin health
  this.health = health;

  var a = 0;

  this.alive = true;

  // goblin draw function
  this.draw = function () {
    if (this.health > 0) {
      this.alive = true;
    } else {
      this.alive = false;

      if (!this.goldCounted) {
        coins += 5;
        this.goldCounted = true;
      }
    }

    // making it so goblin only draws if health is above 0
    if (this.alive) {
      // drawing green circle that gets less saturated with damage
      colorMode(HSB);
      fill(132, (91 / 100) * this.health, 73);
      ellipse(this.x, this.y, 45);
      colorMode(RGB);

      // drawing black health bar
      fill(0);
      textAlign(CENTER, CENTER);
      textSize(15);
      text(this.health, this.x, this.y + 35);
    }
  };

  this.update = function () {
    if (this.alive) {
      if (this.x < hero.x) this.x += this.speed;
      if (this.x > hero.x) this.x -= this.speed;
      if (this.y < hero.y) this.y += this.speed;
      if (this.y > hero.y) this.y -= this.speed;
    }
  };

  // hero sword function
  this.heroSword = function () {
    if (this.health > 0) {
      // controls when sword appears
      if (dist(hero.x, hero.y, this.x, this.y) < 100 && keyIsDown(32)) {
        push();
        translate(hero.x, hero.y);

        // rotating the sword to be oriented towards hero
        let a = atan2(hero.y - this.y, hero.x - this.x);
        rotate(a + (3 * PI) / 2);
        if (SwordAppear) fill(125);
        else fill("silver");
        rect(10, -45, 5, 45);
        pop();

        // damaging if statement
        if (dist(hero.x, hero.y, this.x, this.y) < 65) {
          this.health = this.health - this.swordDamage;
          // 1 in 30 chance of getting dialogue option
          if (random(0, 1) < 1) {
            //textSize()
            push();
            fill(181, 37, 50);
            textStyle(BOLDITALIC);
            text(this.goblinLine, this.x, this.y - 40);
            pop();
          }
        }
      }

      if (!SwordAppear) {
        this.swordDamage = 3;
      }
    }
  };

  this.collision = function () {
    //THIS IS CODE IM WORKING ON TO DO A THING BUT ITS NOT WORKING

    //    for (i = 0; i < goblins.length; i++){
    //      if (dist(hero.x, hero.y, goblins[i].x, goblins[i].y) > 37.5){
    //        goblinColliding[i] = false
    //      } else goblinColliding[i] = true
    //    }

    //    if (goblinColliding == false){
    //      takingDamage = false;
    //    } else takingDamage = true

    if (dist(hero.x, hero.y, this.x, this.y) < 37.5 && this.alive) {
      if (HeroMode == Standard) {
        hero.health = hero.health - 1;
        takingDamage = true;
      }
    } else if (
      (dist(hero.x, hero.y, goblins[0].x, goblins[0].y) > 37.5 &&
        dist(hero.x, hero.y, goblins[1].x, goblins[1].y) > 37.5 &&
        dist(hero.x, hero.y, goblins[2].x, goblins[2].y) > 37.5 &&
        dist(hero.x, hero.y, goblins[3].x, goblins[3].y) > 37.5 &&
        dist(hero.x, hero.y, goblins[4].x, goblins[4].y) > 37.5 &&
        dist(hero.x, hero.y, goblins[5].x, goblins[5].y) > 37.5 &&
        dist(hero.x, hero.y, goblins[6].x, goblins[6].y) > 37.5 &&
        dist(hero.x, hero.y, goblins[7].x, goblins[7].y) > 37.5 &&
        dist(hero.x, hero.y, goblins[8].x, goblins[8].y) > 37.5) ||
      (goblins[0].alive == false &&
        goblins[1].alive == false &&
        goblins[2].alive == false &&
        goblins[3].alive == false &&
        goblins[4].alive == false &&
        goblins[5].alive == false &&
        goblins[6].alive == false &&
        goblins[7].alive == false &&
        goblins[8].alive == false)
    ) {
      takingDamage = false;
    }
  };
}

function createGoblins() {
  //create goblins with X, Y, and a random dialouge line
  goblins[0] = new GOBLIN(400, 350, 100, random(goblinLines));
  goblins[1] = new GOBLIN(600, 350, 100, random(goblinLines));
  goblins[2] = new GOBLIN(700, 750, 100, random(goblinLines));
  goblins[3] = new GOBLIN(800, 350, 100, random(goblinLines));
  goblins[4] = new GOBLIN(250, 500, 100, random(goblinLines));
  goblins[5] = new GOBLIN(500, 500, 100, random(goblinLines));
  goblins[6] = new GOBLIN(750, 500, 100, random(goblinLines));
  goblins[7] = new GOBLIN(100, 700, 100, random(goblinLines));
  goblins[8] = new GOBLIN(100, 500, 100, random(goblinLines));
}
