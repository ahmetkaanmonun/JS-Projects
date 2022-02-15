'use strict';

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 10;

const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
const body = document.querySelector('body');
const scoreText = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const numberBox = document.querySelector('.number');
const message = document.querySelector('.message');
const againButton = document.querySelector('.again');

checkButton.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  numberBox.textContent = guess;
  // When there is no input
  if (!guess) {
    message.textContent = '⛔ No number';
  } else if (guess === secretNumber) {
    message.textContent = '✔ Correct Number';
    score++;
    scoreText.textContent = score;
    body.style.backgroundColor = '#00ff00';
    numberBox.style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '🔥 Too high';
      score--;
      scoreText.textContent = score;
    } else {
      message.textContent = '❌ Game Over,You Lost.';
      scoreText.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '🔽 Too low';
      score--;
      scoreText.textContent = score;
    } else {
      message.textContent = '❌ Game Over,You Lost.';
      scoreText.textContent = 0;
    }
  }
});

againButton.addEventListener('click', () => {
  document.querySelector('.guess').value = '';
  score = 20;
  scoreText.textContent = score;
  numberBox.textContent = '?';
  message.textContent = 'Start guessing ...';
  numberBox.style.width = '15rem';
  body.style.backgroundColor = '#222';
});
