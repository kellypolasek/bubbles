var bubbles = [];

setup = function () {
  createCanvas(600, 400);
};

draw = function () {
  background(0);

  if (mouseIsPressed) bubbles.push(new Bubble (mouseX, mouseY));

  bubbles.forEach(function updateAndDisplay(bubble) {
    bubble.update();
    bubble.display();
  });
};
