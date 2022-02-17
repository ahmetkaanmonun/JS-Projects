'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const body = document.querySelector('body');
const scoreText = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const numberBox = document.querySelector('.number');
const message = document.querySelector('.message');
const againButton = document.querySelector('.again');

const displayMessage = msg => (message.textContent = msg);

checkButton.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  numberBox.textContent = guess;
  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number');
  } else if (guess === secretNumber) {
    displayMessage('✔ Correct Number');
    score++;
    scoreText.textContent = score;
    body.style.backgroundColor = '#00ff00';
    numberBox.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      scoreText.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔥 Too high' : '🔽 Too low');
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('❌ Game Over,You Lost.');
      scoreText.textContent = 0;
    }
  }
});

againButton.addEventListener('click', () => {
  document.querySelector('.guess').value = '';
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  scoreText.textContent = score;
  numberBox.textContent = '?';
  displayMessage('Start guessing ...');
  numberBox.style.width = '15rem';
  body.style.backgroundColor = '#222';
});
