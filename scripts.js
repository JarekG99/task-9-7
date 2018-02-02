// scripts.js

var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click',newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors'),
    finalScore;

pickRock.addEventListener('click', function() {
 if (player.score == finalScore || computer.score == finalScore) {
   gameState = 'ended';
   setGameElements();
 } else playerPick('rock');
});
pickPaper.addEventListener('click', function() {
  if (player.score == finalScore || computer.score == finalScore) {
    gameState = 'ended';
    setGameElements();
  } else playerPick('paper');
});
pickScissors.addEventListener('click', function() {
  if (player.score == finalScore || computer.score == finalScore) {
    gameState = 'ended';
    setGameElements();
  } else playerPick('scissors');
});

var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
    switch(gameState) {
      case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
      case 'ended':
        newGameBtn.innerText = 'Once again?';
        playerPointsElem.innerHTML = computerPointsElem.innerHTML = 0;
        playerPickElem.innerHTML = computerPickElem.innerHTML = '';
        playerResultElem.innerHTML = computerResultElem.innerHTML = '';
      case 'notStarted':
      default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
    player.name = prompt('Please enter your name', '');
    finalScore = prompt('Please enter final score');
    if (player.name) {
      player.score = computer.score = 0;
      gameState = 'started';
      setGameElements();
      playerNameElem.innerHTML = player.name;
    }
}
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
}
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';
  var winnerIs = 'player';
    if (playerPick == computerPick) {
        winnerIs = 'none'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
        winnerIs = 'computer';
    }
    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    }
    setGamePoints();
    gameResult();
}
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}
function gameResult() {
  if (player.score == finalScore) {
    playerResultElem.innerHTML = 'The winner is player <br><h4 small>Click any button</h4>';
    // console.log(player.score);
  } else if(computer.score == finalScore) {
    computerResultElem.innerHtml = 'The winner is computer <br><h4 small>Click any button</h4>';
    // console.log(computer.score);
 }
 return false;
}
