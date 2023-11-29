function SCENE_STORE() {
  //go from scene one to two

  if (
    SCENE_ONE_STATE == ON &&
    hero.x > 590 &&
    hero.x < 640 &&
    hero.y > 650 &&
    hero.y < 740
  ) {
    SCENE_LOCATION = 5;
    SCENE_ONE_STATE = OFF;
    SCENE_STORE_STATE = ON;
    hero.x = 500;
    hero.y = 950;
  }

  //go from scene one to four

  if (
    SCENE_STORE_STATE == ON &&
    hero.y > 1000 &&
    hero.x > 400 &&
    hero.x < 600
  ) {
    SCENE_LOCATION = 1;
    SCENE_STORE_STATE = OFF;
    SCENE_ONE_STATE = ON;
    hero.x = 612.5;
    hero.y = 750;
  }

  //add stuff in here to add it to the scene

  if (SCENE_STORE_STATE == ON) {
    background(191, 163, 163);
    fill(101, 89, 71);
    rect(0, 0, 30, 1000);
    rect(970, 0, 30, 1000);
    rect(0, 50, 400, 30);
    rect(600, 50, 400, 30);
    rect(0, 970, 400, 30);
    rect(670, 970, 400, 30);
    fill(221, 208, 157);
    push()
    fill(0);
        textWrap(WORD);
        textAlign(CENTER);
        textSize(30);
        textFont('algerian');
        text("Welcome to the store", 500, 500);
    pop()
    betterSword(500,125)
    for (i = 0; i < 6; i++) {
      ellipse(50 + 50 * i, 25, 20, 20);
    }
    for (i = 0; i < 6; i++) {
      ellipse(650 + 50 * i, 25, 20, 20);
    }

    villagers[7].draw();
    villagers[7].update();
    villagers[7].dialouge();
    
    villagers[9].draw();
    villagers[9].update();
    villagers[9].dialouge();
    
    villagers[10].draw();
    villagers[10].update();
    villagers[10].dialouge();
    
    villagers[11].draw();
    villagers[11].update();
    villagers[11].dialouge();
    
     barriers[0].draw()
    barriers[0].horizontalCollision()
     
    barriers[1].draw()
    barriers[1].horizontalCollision()
    
    barriers[2].draw()
   barriers[2].horizontalCollision()
  
  }
}
