'use strict';

function Game (container) {
    var self = this;
    
    self.container = container;
    self.gameScreenElement = null;
    self.ball = null;
    self.player1 = null;
    self.player2 = null;
  };

Game.prototype.build = function() {
    var self = this;

    self.gameScreenElement = createHtml(`
      <div class="game-screen">
        <canvas width="500" height="500"></canvas>
      </div>
    `);
    self.container.appendChild(self.gameScreenElement);
    self.canvas = self.gameScreenElement.querySelector('canvas');
    self.ctx = self.canvas.getContext('2d');
}

Game.prototype.start = function() {
    var self = this;

    self.ball = new Ball();
    self.player1 = new Player1;
    self.player2 = new Player2;

    self.frame();
}

Game.prototype.frame = function () {
    var self = this;

    self.ball.update();
// @todo check if off limits left/right and reset position

    self.player1.update();
    self.player2.update();
  

    self.ctx.clearRect(0, 0, 500, 500);

    self.ball.draw(self.ctx);
    self.player1.draw(self.ctx);
    self.player2.draw(self.ctx);

    window.requestAnimationFrame(function () {
      self.frame();
  });
} 


/*Game.prototype.Ended = function() {
  var self = this;
  
  
 };*/
 
 Game.prototype.destroy = function() {
    var self = this;
  
    self.gameScreenElement.remove();
 };