var bubblepit = [];

//var myBubble = new Bubble(100, 100);
//myBubble.speed.x = 2;
//myBubble.speed.y = 2;

var setup = function () {
  createCanvas(600, 400);
//  iterateWithForLoop(500);
};

var draw = function () {
  background(100);
  bubblepit.forEach(function updateAndDisplay(bubble) {
    bubble.update();
    bubble.display();
    });
    if (mouseIsPressed) bubblepit.push(new Bubble(mouseX, mouseY));
};



//var iterateWithForLoop = function (numberOfBubbles) {
  //for (var i = 0; i < numberOfBubbles; ++i) {
    //bubblepit.push (new Bubble (random(0, width-10), random(10, height - 10)));
    //updateAndDisplay(array[i]);
