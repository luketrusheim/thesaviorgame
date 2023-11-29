
let currents = []
currentState = DEFAULT

const COLLIDE = 1

const moveLEFT = 0 
const moveRIGHT = 1

//CURRENT PUSHES LEFT BY DEFAULT 
//IF YOU WANT IT TO PUSH RIGHT PUT 1 in direction

function waterCurrent() {
  barriers[0] = new BARRIER(500, 1000, 500, 1000);
}


function CURRENT(xStart, xEnd, yStart, yEnd, direction) {
  this.direction = direction
  this.xStart = xStart;
  this.xEnd = xEnd;
  this.yStart = yStart;
  this.yEnd = yEnd;
  
  this.xCenter = (xEnd - xStart)/2
  this.yCenter = (yEnd - xStart)/2
  
  this.angle = atan2(hero.y - this.yCenter, hero.x - this.xCenter)
  
  this.dx = hero.x - this.xCenter
  this.dy = hero.y - this.yCenter
  
  this.slope = this.dy/this.dx
  
  
  

  this.draw = function () {
    push()
    noStroke()
    noFill();
    rect(
      this.xStart,
      this.yStart,
      this.xEnd - this.xStart,
      this.yEnd - this.yStart
    );
    pop()
  };

  this.collision = function () {
    if (
      hero.x >= this.xStart &&
      hero.x <= this.xEnd &&
      hero.y >= this.yStart &&
      hero.y <= this.yEnd
    ) {
      currentState = COLLIDE;
    } else {
      currentState = DEFAULT;
    }

    if (currentState == COLLIDE) {
      if (this.direction == 1){
        hero.x +=  hero.speed - 1;
      hero.y -= this.slope;
      } else {
      
      hero.x -=  hero.speed - 1;
      hero.y -= this.slope;
      }
    }
  };
}

function createCurrents() {
  currents[0] = new CURRENT(750, 1000, 400, 1000)
  currents[1] = new CURRENT(750, 1000, 0, 1000);
  currents[2] = new CURRENT(-50, 250, 550, 1050, 1)
  
}

