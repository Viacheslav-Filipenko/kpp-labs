const { randomInteger } = require('../utils/get-random-interger.util');

exports.getBullsAndCows = (secret = [], guess = []) => {
	const secretEntries = Object.entries(secret);
	let bulls = 0;
	let cows = 0;

	for (const [indexOfSecret, element] of secretEntries) {
		const indexOfGuess = guess.indexOf(element);
		const isBull = indexOfGuess == indexOfSecret;
		const isCows = indexOfGuess !== -1 && !isBull;

		bulls += isBull ? 1 : 0;
		cows += isCows ? 1 : 0;
	}

	return { bulls, cows };
};

exports.generateSequenceFromArray = (array = [], limit) => {
	const sequance = [];

	while (limit > sequance.length) {
		const index = randomInteger(0, array.length - 1);
		const removed = array.splice(index, 1)[0];
		sequance.push(removed);
	}

	return sequance;
};
