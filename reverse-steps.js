// 2 1
// 1

function ReveseNumSequence(n) {
	let numseq_row = "";
	for (let i = n; i >= 1; i--) {
		numseq_row = numseq_row + i + " ";
	}
	return numseq_row;
}

console.log(ReveseNumSequence(2));
console.log(ReveseNumSequence(1));
