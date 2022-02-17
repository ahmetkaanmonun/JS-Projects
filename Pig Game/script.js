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
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
//Rolling Dice Functionality

rollDiceBtn.addEventListener('click', () => {
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
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
