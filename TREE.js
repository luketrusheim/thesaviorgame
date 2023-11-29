//storing tree objects in array
let trees = [];
let trees2 = []

// creating number of tree value
let treeNum = 100;

// making tree object
function TREE(index) {
  // index value
  this.index = index;

  // tree x
  this.x = random(20, width);
  // tree y with spawn location moving down canvas so that trees "in front" spawn on top
  this.y = random(index, index+0.1);

  // tree green value
  this.g = random(60, 110);

  // tree draw function
  this.draw = function () {
    fill(102, 51, 0);

    rect(this.x, this.y, 7.5, 65);

    //leaves
    push();

    //color of leaves
    fill(1, this.g, 33);

    translate(this.x + 3.75, this.y + 32.5);
    triangle(-20, 0, 0, -34.6, 20, 0);
    triangle(-18, -20, 0, -38.1, 18, -20);

    pop();
  };
}

//this function is run in setup to create all the tree objects
function createTrees(forest) {
  for (i = 0; i < treeNum; i++) {
    forest.push(new TREE(i));
  }
}

//this function draws all the tree objects
function drawForest() {
  for (i = 0; i < treeNum; i++) {
    push();
    scale(1.4);
    trees[i].draw();
    pop();
  }
}

//this function draws all the tree objects
function drawForest2() {
  for (i = 0; i < treeNum; i++) {
    push();
    scale(1.4);
    trees2[i].draw();
    pop();
  }
}

function drawForest3() {
  for (i = 0; i < treeNum; i++) {
    push();
    scale(1.4);
    trees2[i].draw();
    pop();
  }
}
