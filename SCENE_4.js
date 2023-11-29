function SCENE_FOUR() {
  //go from scene four to three

  if (SCENE_FOUR_STATE == ON && hero.x > 1000) {
    SCENE_LOCATION = 3;
    SCENE_FOUR_STATE = OFF;
    SCENE_THREE_STATE = ON;
    hero.x = 50;
  }

  //go from scene four to one

  if (SCENE_FOUR_STATE == ON && hero.y < 0) {
    SCENE_LOCATION = 1;
    SCENE_FOUR_STATE = OFF;
    SCENE_ONE_STATE = ON;
    hero.y = 950;
  }

  //add stuff in here to add it to the scene

  if (SCENE_FOUR_STATE == ON) {
    background(175, 128, 79);
    drawForest3();

    for (i = 0; i < 2; i++) {
      goblins[i].draw();
      goblins[i].heroSword();
      goblins[i].collision();
      goblins[i].update();
    }
    
    drawVendorHouse(400, 400);
    textSize(17);
    text('Farm House', 525, 515);
    
    for (i = 4; i < 16; i ++){
      apples[i].update();
      apples[i].draw();
    }
    
    }

}