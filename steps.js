// 1
//   2
//     3
//       4

let n = 4;

function leftStep(n) {
	let space = "";
	for (let i = 1; i <= n; i++) {
		space += "  ";
	}

	return space;
}

function Right(n) {
	let space = "";
	for (let i = n; i < 0; i--) {
		space += "   ";
	}
	return space;
}

for (let i = 1; i <= n; i++) {
	console.log(leftStep(i - 1) + i) + Right(n);
}
