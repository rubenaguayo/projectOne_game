'use strict';

function Player (position, heigth, width) {
    var self = this;
    
    self.position = {
        x: position.x,
        y: position.y,
    };
    self.heigth = 50;
    self.width = 5;
}

function Player1 (heigth, width) {
    var self = this;
    
    Player.call(self, heigth, width);
    self.position = {
        x: 1,
        y: position.y,
    }
}

function Player2 (heigth, width) {
    var self = this;
    
    Player.call(self, heigth, width);
    self.position = {
        x: 499,
        y: position.y,
    }
}

    

*/    
// Don't think is neccesary creating a prototype since there is 
// only one Player1
/*Player1.prototype = Object.create(Player.prototype)
  Player1.prototype.constructor = Player1;*/

    



