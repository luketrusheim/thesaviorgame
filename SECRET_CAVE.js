/*

SCENE_SECRET_CAVE_STATE = false

function SCENE_SECRET_CAVE() {
  //go from scene one to two

  if (
    SCENE_FOUR_STATE == ON &&
    DayMode == NIGHT &&
    hero.x > 25 &&
    hero.x < 125 &&
    hero.y > 775 &&
    hero.y < 825 
  ) {
    SCENE_LOCATION = 6;
    SCENE_FOUR_STATE = OFF;
    SCENE_SECRET_CAVE_STATE = true;
    hero.x = 500;
    hero.y = 950;
  }

  //go from scene one to four

  if (
    SCENE_SECRET_CAVE_STATE == true &&
    hero.y > 1000
  ) {
    SCENE_LOCATION = 4;
    SCENE_SECRET_CAVE_STATE = false;
    SCENE_FOUR_STATE = ON;
    hero.x = 100;
    hero.y = 850;
  }
}
  //add stuff in here to add it to the scene

  if (SCENE_SECRET_CAVE_STATE == true) {
    background(0);
    textSize(80)
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(15);
    text('WELCOME TO THE CAVE OF VISIONS', 500, 500, 200, 200);
    
     barriers[0].draw()
    barriers[0].horizontalCollision()
     
    barriers[1].draw()
    barriers[1].horizontalCollision()
    
    barriers[2].draw()
   barriers[2].horizontalCollision()
    
  }
*/