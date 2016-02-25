var dotpit = [];

setup = function () {
  createCanvas(600, 400);
  iterateWithForLoop(5000);
};

draw = function () {
  background(0);

  dotpit.forEach(function updateAndDisplay(Static) {
    Static.display();
    Static.update();
  });
};

var iterateWithForLoop = function (numberOfStatic) {
  for (var i = 0; i < numberOfStatic; ++i) {
    dotpit.push (new Static (random(0, width-10), random(10, height - 10)));
    //updateAndDisplay(array[i]);
  }
};
