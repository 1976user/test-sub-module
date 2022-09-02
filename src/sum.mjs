import * as R from 'ramda';

function sum(...numbers) {
	console.log('Sum function from test submodule!');

	return R.reduce(R.add, 0, numbers);
}

function avg(...numbers) {
	console.log('Avg function from test submodule!');

	return numbers.length === 0 ? 0 : R.reduce(R.add, 0, numbers) / numbers.length;
}

export { sum, avg };