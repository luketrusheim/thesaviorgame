let barriers = [];

//ADD NEW BARRIERS IN FUNCTION BELOW THEN COPY PASTE INTO SPECFIC SCENE WITH .draw AND .collision

//ONCE BARRIER IS CORRECTLY PLACED AND WORKING DELETE .draw AND THE BARRIER WILL REMAIN BUT THE VISUAL RECTANGLE WONT

function createBarriers(){

barriers[0] = new BARRIER (0, 10, 0, 1000)       //left
barriers[1] = new BARRIER (990, 1000, 0, 1000)   //right
barriers[2] = new BARRIER (0, 1000, 0, 10)       //top 
barriers[3] = new BARRIER (0, 1000, 990, 1000)   //bottom


}




const horizontalCOLLIDE = 1;
const verticalCOLLIDE = 2


barrierState = DEFAULT;


function BARRIER(xStart, xEnd, yStart, yEnd) {
  this.xStart = xStart;
  this.xEnd = xEnd;
  this.yStart = yStart;
  this.yEnd = yEnd;


  this.draw = function () {
    fill(0);
    rect(
      this.xStart,
      this.yStart,
      this.xEnd - this.xStart,
      this.yEnd - this.yStart
    );
  };

  this.horizontalCollision = function () {
    if (
      hero.xNew >= this.xStart &&
      hero.xNew <= this.xEnd &&
      hero.yNew >= this.yStart &&
      hero.yNew <= this.yEnd
    ) {
      barrierState = horizontalCOLLIDE;
    } else {
      barrierState = DEFAULT;
    }

  
  }
  
  /*
  
      this.verticalCollision = function () {
    if (
      hero.xNew >= this.xStart &&
      hero.xNew <= this.xEnd &&
      hero.yNew <= this.yEnd &&
      hero.yNew >= this.yStart
    ) {
      barrierState = verticalCOLLIDE;
    } else {
      barrierState = DEFAULT;
    }
}
    */

  
 
}

