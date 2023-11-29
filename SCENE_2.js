function SCENE_TWO() {
  //go from scene two to one

  if (SCENE_TWO_STATE == ON && hero.x < 0) {
    SCENE_LOCATION = 1;
    SCENE_TWO_STATE = OFF;
    SCENE_ONE_STATE = ON;
    hero.x = 1000;
  }

  //go from scene two to three

  if (SCENE_TWO_STATE == ON && hero.y > 1000) {
    SCENE_LOCATION = 3;
    SCENE_TWO_STATE = OFF;
    SCENE_THREE_STATE = ON;
    hero.y = 50;
  }

  //add stuff in here to add it to the scene

  if (SCENE_TWO_STATE == ON) {
    background(17,124,19);
    OceanCliffGradient()
    //floating island
    fill(17,124,19)
    //noStroke()
    rect(775, 0, 200, 400, 60)
    //bridge
    fill(186, 140, 99)
    rect(740, 250, 50, 20)
    //sand
    fill(236, 204, 162)
    rect(200, 850, 550, 200)
  
    // villager with a rumor to share
    
    villagers[8].draw();
    villagers[8].update();
    villagers[8].dialouge();
    
    // his house
     
    drawHouse(830, 230)
    
    drawForest2();

    for (i = 2; i <= 3; i++) {
      goblins[i].draw();
      goblins[i].heroSword();
     goblins[i].collision();
     goblins[i].update();
    }
    currents[0].draw()
    currents[0].collision()
    
  apples[0].draw();
  apples[0].update();
  
  apples[1].draw();
  apples[1].update();
    
  apples[2].draw();
  apples[2].update();
    
  apples[3].draw();
  apples[3].update();
    
    barriers[2].draw()
   barriers[2].horizontalCollision()
    
    barriers[1].draw()
   barriers[1].horizontalCollision()
    
  }
}

function OceanCliffGradient() {
  water = color(50, 150, 250);
  deepWater = color(8, 26, 89);


  for (let i = 750; i <= 1000; i++) {
    push()
    let midColor = map(i, 750, 1000, 0, 1);
    let c = lerpColor(water, deepWater, midColor);
    stroke(c);
    line(i, 0, i, 1000);
    pop()
  }
}