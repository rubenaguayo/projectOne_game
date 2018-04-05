'use strict';

function Player (x, keyCodeUp, keyCodeDown) {
    var self = this;
    
    self.position = {
        x: x,
        y: 200
    }
    self.direction = {
        x: 0,
        y: 0
    }
    self.height = 100;
    self.width = 10;

    self.upPressed = false;
    self.downPressed = false;

    self.keyPressedHandler = function(event) {

        if (event.keyCode === keyCodeUp) {
            self.upPressed = true;
        } else if (event.keyCode === keyCodeDown) {
            self.downPressed = true;
        }
    }

    self.keyReleasedHandler = function(event) {

        if (event.keyCode === keyCodeUp) {
            self.upPressed = false;
        } else if(event.keyCode === keyCodeDown) {
            self.downPressed = false;
        }

    }    
    
    document.addEventListener('keydown', self.keyPressedHandler, false);
    document.addEventListener('keyup', self.keyReleasedHandler, false);
};


Player.prototype.update = function() {
    var self = this;
  
    if (self.upPressed === true) {
        if(self.position.y >= 0) {
            return self.position.y--;
        } else {
            return self.position.y++;
        }         
    } else if (self.downPressed === true) {
        if (self.position.y < 400) {
            return self.position.y++;
        } else {
            return self.position.y--;
        }
    }
}

Player.prototype.draw = function(canvasContext) {
    var self = this;
    
    canvasContext.fillStyle = 'green';
    canvasContext.fillRect(self.position.x,self.position.y,self.width,self.height)
    canvasContext.fill()

}

  
// Don't think is neccesary creating a prototype since there is 
// only one Player1
/*Player1.prototype = Object.create(Player.prototype)
  Player1.prototype.constructor = Player1;*/

    



