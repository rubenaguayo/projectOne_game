'use strict';

function Ball () {
  var self = this;

  self.position = {
    x: 50,
    y: 50,
  };
  self.direction = {
    x: 1,
    y: 2,
  };
}

Ball.prototype.update = function() {
  var self = this;

  self.position.x += self.direction.x;
  self.position.y += self.direction.y;

  if ((self.position.y === 0) || (self.position.y === 500)) {
    return self.direction.y *= -1;
  } 
    

  // @todo check if off limits up/down and bounce 

};

Ball.prototype.draw = function(canvasContext) {
  var self = this;

  canvasContext.beginPath();
  canvasContext.arc(self.position.x, self.position.y, 20, 0, Math.PI*2, true);
  canvasContext.stroke();
  canvasContext.fill();
};



