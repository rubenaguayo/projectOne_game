'use strict';

function Player (x) {
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

    self.keyDownHandler = function(event) {
        if(event.keyCode === 38) {
            self.upPressed = true;
        } else if(event.keyCode === 40) {
            self.downPressed = true;
        }
    }

    self.keyUpHandler = function(event) {
        if(event.keyCode === 38) {
            self.upPressed = false;
        } else if(event.keyCode === 40) {
            self.downPressed = false;
        }
    }    
    
    document.addEventListener('keydown', self.keyDownHandler, false);
    document.addEventListener('keyup', self.keyUpHandler, false);
};


Player.prototype.update = function() {
    var self = this;
  
    if(self.upPressed === true) {
    if(self.position.y >= 0) {
    return self.position.y--;
    } else return self.position.y++;
            
    } else if(self.downPressed === true) {
    if(self.position.y < 430) {
    return self.position.y++;
    } else return self.position.y--;
    }
}

Player.prototype.draw = function(canvasContext) {
    var self = this;
    
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(self.position.x,self.position.y,self.width,self.height)
    canvasContext.fill()

}

  
// Don't think is neccesary creating a prototype since there is 
// only one Player1
/*Player1.prototype = Object.create(Player.prototype)
  Player1.prototype.constructor = Player1;*/

    



