function SCENE_THREE() {
  //go from scene three to four

  if (SCENE_THREE_STATE == ON && hero.x < 0) {
    SCENE_LOCATION = 4;
    SCENE_THREE_STATE = OFF;
    SCENE_FOUR_STATE = ON;
    hero.x = 1000;
  }

  //go from scene three to two

  if (SCENE_THREE_STATE == ON && hero.y < 0) {
    SCENE_LOCATION = 2;
    SCENE_THREE_STATE = OFF;
    SCENE_TWO_STATE = ON;
    hero.y = 950;
  }

  //add stuff in here to add it to the scene

  if (SCENE_THREE_STATE == ON) {
    background(50, 150, 250);
    fill(236, 204, 162);
    rect(0, 0, 700, 1000);
    fill(236, 204, 162);
    rect(0, 0, 700, 1000);
    OceanGradient();
    fill(220);
  //  potion(350, 800);
    powerOrb(375, 800, 0.4, PowerOrb)
    //winGame();
    
    currents[1].draw()
    currents[1].collision()
    
    barriers[1].draw()
   barriers[1].horizontalCollision()
    
    barriers[3].draw()
   barriers[3].horizontalCollision()
    
        for (i = 0; i < 5; i++) {
      goblins[i].draw();
      goblins[i].heroSword();
      goblins[i].collision();
      goblins[i].update();
    }
    
  }
}

//CREATES THE SAND TO OCEAN COLOR GRADIENT IN SCENE THREE - MEANT TO LOOK LIKE BEACH

function OceanGradient() {
  sand = color(236, 204, 162);
  water = color(50, 150, 250);
  deepWater = color(8, 26, 89);

  for (let i = 700; i <= 850; i++) {
    let midColor = map(i, 700, 850, 0, 1);
    let c = lerpColor(sand, water, midColor);
    push()
    stroke(c);
    line(i, 0, i, 1000);
    pop()
  }

  for (let i = 750; i <= 1000; i++) {
    let midColor = map(i, 750, 1000, 0, 1);
    let c = lerpColor(water, deepWater, midColor);
    push()
    stroke(c);
    line(i, 0, i, 1000);
    pop()
  }
}
