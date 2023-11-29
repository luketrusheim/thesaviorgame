//creates villager

let villagers = [];

function VILLAGER(x, y, vColor, dialouge) {
  this.villagerDialouge = dialouge;

  this.speed = random(0.7, 2.2);

  this.x = x;
  this.y = y;

  this.health = random(10, 50);

  this.alive = true;

  this.draw = function () {
    if (this.health > 0) {
      this.alive = true;
    } else this.alive = false;

    if (this.alive) {
      fill(210 - vColor, 180 - vColor, 170 - vColor);
      circle(this.x, this.y, 30);
    }
  };

  this.dialouge = function () {
    if (dist(hero.x, hero.y, this.x, this.y) < 30) {
      if (keyIsDown(69)) {
        fill(0);
        textWrap(WORD);
        textAlign(CENTER);
        textSize(15);
        text(dialouge, this.x, this.y + 35);
      }
    }
  };

  this.update = function () {
    if (this.alive) {
      if (HeroMode == GoblinTime)
        if (dist(this.x, this.y, hero.x, hero.y) < 100) {
          if (this.x < hero.x) this.x -= this.speed;
          if (this.x > hero.x) this.x += this.speed;
          if (this.y < hero.y) this.y -= this.speed;
          if (this.y > hero.y) this.y += this.speed;
        }
    }
  };
}
function addVillagers() {
  //top two
 villagers[0] = new VILLAGER(130, 250, 20, "save our village!");
  villagers[1] = new VILLAGER(100, 350, 90, "beware!");
  villagers[2] = new VILLAGER(50, 650, 130, "PLEASE SAVE US!");
  villagers[3] = new VILLAGER(160, 820, 10, "Help fight the goblins!");
  villagers[4] = new VILLAGER(200, 650, 110, "THEY STOLE THE ORB!");
  villagers[5] = new VILLAGER(290, 820, 160, "Dirty green goblins!");
  villagers[6] = new VILLAGER(600, 820, 70, "NO ORB = NO WELL");
  villagers[7] = new VILLAGER(500, 800, 40, "Looking for help? Browse my store.");
  villagers[8] = new VILLAGER(810, 360, 40, "Apples will heal...");
  villagers[9] = new VILLAGER(300, 700, 40, "Find the beach and kill the goblins...");
  villagers [10] = new VILLAGER(700, 700, 40, "Collect the orb...great fortune awaits...");
  villagers [11] = new VILLAGER(500, 350, 40, "Goblins have coin...");


}


