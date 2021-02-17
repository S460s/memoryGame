function doubleArray(arr) {
	let copy = [];
	arr.forEach((item) => {
		for (let i = 0; i < 2; i++) {
			copy.push(item);
		}
	});
	return copy;
}

function shuffle(array) {
	let copy = [];
	let doubledArray = doubleArray(array);
	let n = doubledArray.length;
	let i;
	while (n) {
		i = Math.floor(Math.random() * doubledArray.length);
		if (i in doubledArray) {
			copy.push(doubledArray[i]);
			delete doubledArray[i];
			n--;
		}
	}

	return copy;
}

export default shuffle;
