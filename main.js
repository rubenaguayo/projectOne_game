'use strict'

function createHtml(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}


function main() {
  var mainContentElement = document.getElementById('main-content');

  // -- TITLE SCREEN

  var titleScreenElement;
  var startButtonElement;

  function handleStartClick() {
    destroyTitleScreen();
    buildGameScreen();
  }

  function buildTitleScreen() {
    titleScreenElement = createHtml(`
      <div class="title-screen">
        <h1>IRON CHAMPIONG</h1>
        <button>game on</button>
      </div>
    `);
    
    mainContentElement.appendChild(titleScreenElement);
    startButtonElement = titleScreenElement.querySelector('button');
    startButtonElement.addEventListener('click', handleStartClick);
  }

  function destroyTitleScreen() {
    titleScreenElement.remove();
    startButtonElement.removeEventListener('click', handleStartClick);
  }


  // -- GAME SCREEN

  var game;

  function buildGameScreen() {
    game = new Game(mainContentElement);
    //window.setTimeout(gameEnded, 1000);
    game.build();
    game.start();
  }

  function destroyGameScreen() {
    game.destroy();
  }

  function gameEnded() {
    destroyGameScreen();
    buildGameOverScreen();
  }

  // -- GAME OVER SCREEN

  var gameOverScreenElement;
  var restartGameButtonElement;

  function handleRestartClick() {
    destroyGameOverScreen();
    buildGameScreen();
  }

  function buildGameOverScreen() {
    gameOverScreenElement = createHtml(`
      <div class="game-over-screen">
        <h1>Hello World</h1>
        <button>start game</button>
      </div>
    `);
    mainContentElement.appendChild(gameOverScreenElement);
    restartGameButtonElement = gameOverScreenElement.querySelector('button');
    restartGameButtonElement.addEventListener('click', handleRestartClick);
  }

  function destroyGameOverScreen() {
    gameOverScreenElement.remove();
    restartGameButtonElement.removeEventListener('click', handleRestartClick);
  }

  // -- start the app

  buildTitleScreen();
}

window.addEventListener('load', main);

