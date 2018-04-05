'use strict';

function Game (container) {
    var self = this;
    
    self.container = container;
    self.gameScreenElement = null;
    self.ball = null;
    self.scorePlayer1 = 0;
    self.scorePlayer2 = 0;
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
    self.player1 = new Player(10, 65, 90);
    self.player2 = new Player(490, 38, 40);

    self.frame();
}

Game.prototype.frame = function () {
    var self = this;

    self.ball.update();

    self.detectPoint();

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


Game.prototype.Ended = function() {
  var self = this;
  
  
 };
 
 Game.prototype.destroy = function() {
    var self = this;
  
    self.gameScreenElement.remove();
 };

 Game.prototype.detectPoint = function() {
  var self = this;

  if (self.ball.position.x === 500){
    self.scorePlayer1 += 1;
    console.log('Player 1: ' + self.scorePlayer1 + ' points');
    var afterGoalPlayer1 = setTimeout(function () {
      return   self.ball.position = {
        x: 450,
        y: 50,
      },
      self.ball.direction = {
        x: -1,
        y: -2,
      };
    }, 3000);
  }
 

 if (self.ball.position.x === 0){
  self.scorePlayer2 += 1;
  console.log('Player 2: ' + self.scorePlayer2 + ' points');
  var afterGoalPlayer1 = setTimeout(function () {
    return   self.ball.position = {
      x: 50,
      y: 50,
    },
    self.ball.direction = {
      x: 1,
      y: 2,
    };
  }, 3000);
} 
  
 }