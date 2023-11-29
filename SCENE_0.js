//START SCREEN
const DEFAULT = 0;
const HOVER = 1;
const CLICK = 2;
rectX = 350;
rectY = 450;
rectWidth = 300;
rectHeight = 100;
rectButtonState = DEFAULT;

function SCENE_START() {
  checkRectButtonCollision(rectX, rectY, rectWidth, rectHeight);

  drawRectButton(rectX, rectY, rectWidth, rectHeight);
}

function drawRectButton(x, y, w, h) {
  if (SCENE_START_STATE == ON) {
    push();
    textAlign(CENTER);    
    fill(2, 7, 93);
    rect(0, 0, 1000, 1000);
    textFont("algerian");
    textSize(100);
    fill(255);
    text("The Savior", 480, 350);
    fill(180);
    rect(x, y + 20, w, h);
    pop();
    

    if (rectButtonState == DEFAULT) {
      push()
      noStroke()
      fill(255, 0, 0);
      rect(x, y, w, h);
      fill(255);
      textSize(50);
      textStyle(BOLD);
      textFont("algerian");
      text("Start", x + w / 2, y + h / 1.78);
      pop()
    } else if (rectButtonState == HOVER) {
      push()
      noStroke()
      fill(150);
      rect(x, y + 20, w, h);
      fill(200, 0, 0);
      rect(x, y, w, h);
      fill(210);
      textSize(50);
      textStyle(BOLD);
      textFont("algerian");
      text("Start", x + w / 2, y + h / 1.78);
      pop()
    } else if (rectButtonState == CLICK) {
      push()
      noStroke()
      fill(120);
      rect(x, y + 20, w, h);
      fill(150, 0, 0);
      rect(x, y + 13, w, h);
      fill(190);
      textSize(50);
      textStyle(BOLD);
      textFont("algerian");
      text("Start", x + w / 2, y + h / 1.4);
      pop()
    }

    push();
    textFont("algerian");
    textSize(37);
    fill(255);
    text("ARROWS/WASD TO MOVE", 500, 650);
    text("E TO INTERACT", 500, 700);
    text("SPACE TO ATTACK", 500, 750);
    text("R TO RESET", 500, 800);
    pop();
  }
}

function checkRectButtonCollision(x, y, wid, height) {
  if (x <= mouseX && mouseX <= x + wid && mouseY <= y + height && mouseY >= y) {
    rectButtonState = HOVER;

    if (mouseIsPressed == true) {
      rectButtonState = CLICK;
    }
  } else rectButtonState = DEFAULT;
}

function mouseClicked() {
  if (rectButtonState == CLICK) {
    SCENE_START_STATE = OFF;
  }
}

//DISPLAYS NUMBER IN MIDDLE BASED ON WHICH SCENE YOU ARE IN

function sceneTracker() {
  textSize(50);
  text(SCENE_LOCATION, 500, 500);
}
