function SCENE_ONE() {
  //go from scene one to two

  if (SCENE_ONE_STATE == ON && hero.x > 1000) {
    SCENE_LOCATION = 2;
    SCENE_ONE_STATE = OFF;
    SCENE_TWO_STATE = ON;
    hero.x = 50;
  }

  //go from scene one to four

  if (SCENE_ONE_STATE == ON && hero.y > 1000) {
    SCENE_LOCATION = 4;
    SCENE_ONE_STATE = OFF;
    SCENE_FOUR_STATE = ON;
    hero.y = 50;
  }

  //add stuff in here to add it to the scene

  if (SCENE_ONE_STATE == ON && SCENE_START_STATE == OFF) {
    background(175, 128, 79);
    GrassGradient()
    drawForest(1000);
    drawVillage(0, 500, 5);
    for (i = 0; i <= 6; i++) {
      villagers[i].draw();
      villagers[i].update();
      villagers[i].dialouge();
    }
    
  drawVendorHouse(500, 500);
    
    barriers[0].draw()
    barriers[0].horizontalCollision()
    barriers[2].draw()
   barriers[2].horizontalCollision()
  

  
    
    
  }
}

function GrassGradient() {
  push()
  dirt = color(175, 128, 79);
  grass = color(17,124,19);

  for (let i = 800; i <= 1000; i++) {
    let midColor = map(i, 800, 1000, 0, 1);
    let c = lerpColor(dirt, grass, midColor);
    stroke(c);
    line(i, 0, i, 1000);
  }
  pop()
}