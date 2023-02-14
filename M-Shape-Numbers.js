let n = 10;

for (let i = 1; i <= n; i++) {
	console.log(
		numberStaircase(i) +
			numberStaircaseSpace(n - i + 1) +
			numberStaircaseSpace(n - i) +
			numberReverseStaircaseSpaces(i)
	);
}

for (let i = n - 1; i < n; i++) {
	console.log(normalNumber(i + 1) + normalReverseNumber(i));
}

function numberStaircaseSpace(n) {
	let run = "";

	for (let i = 1; i <= n; i++) {
		run += "  ";
	}
	return run;
}

function numberStaircase(n) {
	let run = "";

	for (let i = 1; i < n; i++) {
		run += i + " ";
	}
	return run;
}

function numberReverseStaircaseSpaces(n) {
	let run = "";

	for (let i = n - 1; i >= 1; i--) {
		run += i + " ";
	}
	return run;
}

function normalNumber(n) {
	let run = "";
	for (let i = 1; i <= n; i++) {
		run += i + " ";
	}
	return run;
}

function normalReverseNumber(n) {
	let run = "";
	for (let i = n; i >= 1; i--) {
		run += i + " ";
	}
	return run;
}
