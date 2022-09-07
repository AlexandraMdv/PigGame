'use strict';

// // Selecting elements
// const score0El = document.querySelector('#score--0'); //DOM element
// const score1El = document.getElementById('score--1');
// const dice = document.querySelector('.dice');

// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// const currentScore0El = document.getElementById('current--0');
// const currentScore1El = document.getElementById('current--1');
// // const totalScore0El = document.getElementById('.score--0');
// // const totalScore1El = document.getElementById('.score--1');

// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');

// let scores, currentScore, activePlayer, playing;

// //Starting condition
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   currentScore0El.textContent = 0;
//   currentScore1El.textContent = 0;

//   dice.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   currentScore = 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };
// init();

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     let randomDice = Math.floor(Math.random() * 6) + 1;
//     console.log(randomDice);
//     dice.classList.remove('hidden');
//     dice.src = 'dice-' + randomDice + '.png';
//     if (randomDice !== 1) {
//       currentScore += randomDice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       //switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     if (scores[activePlayer] >= 100) {
//       playing = false;
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//       dice.classList.add('hidden');
//     } else {
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);

const totalScore0El = document.getElementById('score--0');
const totalScore1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Starting conditions
let score0 = 0;
let score1 = 0;
let totalScore0 = 0;
let totalScore1 = 0;
let currentScore = 0;
let activePlayer = 0;
let playing = true;

totalScore0El.textContent = 0;
totalScore1El.textContent = 0;

dice.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    let randomDice = Math.floor(Math.random() * 6) + 1;
    console.log(randomDice);
    dice.classList.remove('hidden');
    dice.src = 'dice-' + randomDice + '.png';

    currentScore = randomDice;

    if (currentScore !== 1) {
      if (!activePlayer) {
        score0 += currentScore;
        currentScore0El.textContent = score0;
      } else {
        score1 += currentScore;
        currentScore1El.textContent = score1;
      }
    } else {
      activePlayer = activePlayer === 0 ? 1 : 0;
      console.log('active player is: ' + activePlayer);
      currentScore = 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
      score0 = 0;
      score1 = 0;
      currentScore0El.textContent = 0;

      currentScore1El.textContent = 0;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    if (activePlayer === 0) {
      totalScore0 += score0;
      totalScore0El.textContent = totalScore0;
    } else {
      totalScore1 += score1;
      console.log(score1);
      totalScore1El.textContent = totalScore1;
    }
    if (totalScore0 >= 100 || totalScore1 >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      dice.classList.add('hidden');
    }
    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log('active player is: ' + activePlayer);
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    score0 = 0;
    score1 = 0;
    currentScore0El.textContent = 0;

    currentScore1El.textContent = 0;
  }
});

btnNew.addEventListener('click', function () {
  score0 = 0;
  score1 = 0;
  totalScore0 = 0;
  totalScore1 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  totalScore0El.textContent = 0;
  totalScore1El.textContent = 0;
  console.log('Now, the active player is: ' + activePlayer);
  dice.classList.add('hidden');
});
