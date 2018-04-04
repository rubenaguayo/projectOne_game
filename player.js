'use strict';

function Player () {
    var self = this;
    
    self.position = {
        x: self.position.x,
        y: self.position.y,
    }
    self.direction = {
        x: self.direction.x,
        y: self.direction.y,
    }
    self.height = self.height,
    self.width = self.width

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
    canvasContext.fillRect(self.position.x,self.position.5,30)
    ctx.fill()

};

  
// Don't think is neccesary creating a prototype since there is 
// only one Player1
/*Player1.prototype = Object.create(Player.prototype)
  Player1.prototype.constructor = Player1;*/

    


}
