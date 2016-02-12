var Bubble = function (x, y) {
  this.x = x;
  this.y = y;
};

Bubble.prototype = {

  radius: 5,

  update: function() {
      this.x += random(-5, 5);
      //this.y += 1;
    //if (this.y - this.radius <= 0) this.y = this.radius + random(0, 2);
  },

  display: function () {
    noStroke();
    fill(102, 217, 255, 100);
    rect(this.x, this.y, this.radius, this.radius);
  }

};
