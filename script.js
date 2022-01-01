'use strict';
const newGame = document.querySelector('.new');
const roll = document.querySelector('.roll');
const hold = document.querySelector('.hold');

const player1 = document.querySelector('.player-0');
const player2 = document.querySelector('.player-1');
let currentPlayer1 = document.getElementById('current-0');
let currentPlayer2 = document.getElementById('current-1');

let scores = [0,0];
let currentPlayer = 0;
let currentscore = 0;

let image = document.querySelector('.image');
let score1 = document.querySelector('.score-0');
let score2 = document.querySelector('.score-1');
let current = document.querySelector('.currentScore');

score1.textContent = 0;
score2.textContent = 0;

let playing = true;

const switchPlayer = function(){
    document.getElementById(`current-${currentPlayer}`).textContent = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    currentscore = 0;
    player1.classList.toggle('active-player');
    player2.classList.toggle('active-player');
}
// Event listener on the roll dice button
roll.addEventListener('click', function () {
    if(playing){
    let dice = Math.trunc(Math.random() * 6 + 1);
    image.classList.remove('hidden');
    image.src = `dice-${dice}.png`;
    if (dice !== 1) {
        currentscore = currentscore + dice;
        document.getElementById(`current-${currentPlayer}`).textContent = currentscore;
        // current.textContent = currentscore;
    }
    else {
        // switch player
       switchPlayer();
    }
    }
});

// event listener on the hold button
hold.addEventListener('click', function () {
    if(playing){
    scores[currentPlayer] += currentscore;
    document.querySelector(`.score-${currentPlayer}`).textContent = scores[currentPlayer];
   switchPlayer();
   if(scores[currentPlayer]>=10){
       document.querySelector(`.player-${currentPlayer}`).classList.add('winner');
       document.querySelector(`.player-${currentPlayer}`).classList.remove('active-player');
       document.querySelector(`.heading-${currentPlayer}`).textContent = 'WON 🎉✨';
       document.querySelector(`.player-${currentPlayer}`).style.color = 'black';
       playing = false;
    }
}
});
newGame.addEventListener('click',function(){
    score1.textContent = 0;
    score2.textContent = 0;
    currentPlayer1.textContent = 0;
    currentPlayer2.textContent = 0;
    currentPlayer = 0;
    currentscore = 0;
    playing = true;
    scores = [0,0];
    image.classList.add('hidden');

    player1.classList.remove('winner');
    player2.classList.remove('winner');
    player2.classList.remove('active-player');
    player1.classList.add('active-player');
    
    player1.style.color = 'white';
    player2.style.color = 'white';
    document.querySelector(`.heading-0`).textContent =  'SCORE';
    document.querySelector(`.heading-1`).textContent =  'SCORE';

    
})