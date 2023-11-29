
// creating hero
let hero = new HERO(50, 225, 4);

// creating apples
let apple = new APPLE(200, 350);

var theme; 

function preload() {
  theme = loadSound("ThemeSong.mp3")
}

function setup() {
  createCanvas(1000, 1000);

  theme.loop();
  
  createTrees(trees);
  
  createTrees(trees2);

  createGoblins();

  addVillagers();
  
  createCurrents();
  
  createBarriers()

}

function draw() {
  
  initializeScenes()

  hero.update();
  hero.draw();

  hero.damageIndicator();

  //barrierHelp()
  
//  DaylightCycle();
  hero.healthBar();
  currency();
  hero.healthDeath();
  winGame();


  SCENE_START();
  
}
