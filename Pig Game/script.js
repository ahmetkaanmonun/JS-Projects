'use strict';

//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

//Starting conditions

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

let scores, currentScore, activePlayer, playing;

const init = function () {
  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');
};

init();
//Rolling Dice Functionality

rollDiceBtn.addEventListener('click', () => {
  if (playing) {
    //1-Generating an random dice roll
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    //2-Changing the dice image and Displaying the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;

    //3-Check for rolled number 1;if rolled number is 1, then the player looses his turn

    if (diceRoll !== 1) {
      //Add dice to the current score
      currentScore += diceRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch player
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (playing) {
    //Add current score to the global score
    scores[activePlayer] += currentScore;
    //Update the UI
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Check if player won the game
    if (scores[activePlayer] >= 100) {
      document.getElementById(`name--${activePlayer}`).textContent = 'Winner!';
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      //Switch player
      switchPlayer();
    }
  }
  //Add current score to the global score
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //Check if the player won the game
  if (scores[activePlayer] >= 100) {
    playing = false;
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--0 ${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--0 ${activePlayer}`)
      .classList.remove('player--active');
  } else {
    //Switch player
    switchPlayer();
  }

  //Finish the game
  //Switch player
  switchPlayer();
});

newGameBtn.addEventListener('click', init);
