var bubblepit = [];

var updateAndDisplay = function(bubble) {
  bubble.update();
  bubble.display();
};

setup = function() {
  createCanvas(600, 400);
};

draw = function () {
  background(100);
  //iterateFunctionally(ballpit);
  //iterateWithWhileLoop(ballpit);
  iterateWithForLoop(bubblepit);
  if (mouseIsPressed) bubblepit.push(new Bubble(mouseX, mouseY));
};

var iterateFunctionally = function (array) {
  array.forEach(updateAndDisplay);
};

var iterateWithWhileLoop = function (array) {
  var index = 0;
  while (index < array.length) {
    updateAndDisplay(array[index]);
    ++index;
  }
};

var iterateWithForLoop = function (array) {
  for (var index = 0; index < array.length; ++index) {
    updateAndDisplay(array[index]);
  }
};
