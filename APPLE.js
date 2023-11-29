let apples = []

//cooldown attack
//day and night cycle more obvious
//talk to closs to goblins


// making apple object
function APPLE(x, y) {
  // apple x and y
  this.x = x;
  this.y = y;

  // appear and disappear values
  this.APPEAR = true;

  //collision and pickup function
  this.update = function () {
    if (
      this.APPEAR == true &&
      dist(hero.x, hero.y, this.x, this.y) < 22.5 &&
      keyIsDown(69)
    ) {
      // giving hero health only if less than or equal to 75
      if (hero.health < 85) {
        hero.health = hero.health + 15;
        this.APPEAR = false;
      } else if (hero.health >= 85 && hero.health < 100) {
        hero.health = 100;
        this.APPEAR = false;
      } else text("Your health is already maxed!", hero.x, hero.y - 30);
    }
  };

  // apple draw function
  this.draw = function () {
    if (this.APPEAR == true) {
      push();
      translate(this.x, this.y);
      fill("brown");
      rect(-2, -12, 3, 10);
      fill("red");
      circle(0, 0, 15);
      pop();
    } else if (this.APPEAR == false) {
      // no code here this is so it doesn't draw anything after the apple is pickes up
    }
  };
}

apples[0] = new APPLE(200, 350);
apples [1] = new APPLE(400, 400);
apples[2] = new APPLE(100, 600);
apples[3] = new APPLE(500, 600);
apples[4] = new APPLE(27, 814);
apples[5] = new APPLE(671, 582);
apples[6] = new APPLE(828, 721);
apples[7] = new APPLE(151, 512);
apples[8] = new APPLE(667, 923);
apples[9] = new APPLE(198, 884);
apples[10] = new APPLE(299, 627);
apples[11] = new APPLE(118, 750);
apples[12] = new APPLE(772, 819);
apples[13] = new APPLE(284, 748);
apples[14] = new APPLE(330, 892);
apples[15] = new APPLE(143, 794);