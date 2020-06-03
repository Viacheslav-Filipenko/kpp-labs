const readlineSync = require('readline-sync');

const { getBullsAndCows, generateSequenceFromArray } = require('./services/game.service');

const LIMIT = 4;
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const secret = generateSequenceFromArray(NUMBERS, 4);
console.log('Guess the number');

let attempts = 0;

while (true) {
	const answer = readlineSync.question('Attempt ');
	const result = answer.split('').map(Number);

	const { bulls, cows } = getBullsAndCows(secret, result);

	console.log(`Bulls: ${bulls}; Cows: ${cows}`);

	attempts += 1;

	if (bulls === LIMIT) {
		console.log(`Right sequence! Attempts: ${attempts}`);
		break;
	}
}
