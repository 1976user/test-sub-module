import * as R from 'ramda';

function sum(...numbers) {
	console.log('Add function from test submodule!');

	return R.reduce(R.add, 0, numbers);
}

export default sum;