function resetGame() {
  hero.health = 100;
  apples[0] = new APPLE(200, 350);
  apples[1] = new APPLE(400, 400);
  apples[2] = new APPLE(100, 600);
  apples[3] = new APPLE(500, 600);
  goblins[0] = new GOBLIN(400, 350, 100, random(goblinLines));
  goblins[1] = new GOBLIN(600, 350, 100, random(goblinLines));
  goblins[2] = new GOBLIN(700, 750, 100, random(goblinLines));
  goblins[3] = new GOBLIN(800, 350, 100, random(goblinLines));
  goblins[4] = new GOBLIN(250, 500, 100, random(goblinLines));
  goblins[5] = new GOBLIN(500, 500, 100, random(goblinLines));
  goblins[6] = new GOBLIN(750, 500, 100, random(goblinLines));
  goblins[7] = new GOBLIN(100, 700, 100, random(goblinLines));
  goblins[8] = new GOBLIN(100, 500, 100, random(goblinLines));
  coins = 0;
  hero.x = 50;
  hero.y = 225;
  SCENE_START_STATE = OFF;
  SCENE_ONE_STATE = ON;
  SCENE_TWO_STATE = OFF;
  SCENE_THREE_STATE = OFF;
  SCENE_FOUR_STATE = OFF;
  SCENE_STORE_STATE = OFF;
  SCENE_SECRET_CAVE_STATE = OFF;
  SCENE_LOCATION = 1;
  PotionAppear = true;
  PowerOrb = true;
  SwordAppear = true;
  takingDamage = false;
}

function keyPressed() {
  if (key == "r") {
    resetGame();
  }
}
