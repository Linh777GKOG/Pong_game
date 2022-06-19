import Ball from './Ball.js';
import Paddle from './Paddle.js';

const ball = new Ball(document.getElementById('ball'));
const playerPaddle = new Paddle(document.getElementById('player-paddle'));
const computerPaddle = new Paddle(document.getElementById('computer-paddle'));
const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
