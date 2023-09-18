export function arraysMatch (array1, array2) {
	if (array1.length !== array2.length) return false;
	for (let i = 0; i < array1.length; i++) {
		if (array1[i] !== array2[i]) return false;
	}
	return true;
}

export function isZero (value) {
	return !value || value === '0';
}

export function parseValue (value) {
	value = parseFloat(value);
	return isNaN(value) ? 0 : value;
}
