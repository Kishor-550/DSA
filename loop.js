// for (let i = 1; i <= 7; i++) {
//     let test = ""
//     for (let j = 0; j < 7; j++) {
//         test += i;
//     }
//   console.log(test)
// }

// let str = "sridevan ajmal";

// let arr = str.split(' ');

// for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str[i].length; j++) {
//         console.log(str[i][j].length);

//     }

// }

// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j + " ";
//   }
//   console.log(row);
// }

//     const string = "The quick brown fox jumps over the lazy dog";
// console.log(string.length);
// // expected output: 43

// console.log (string.indexOf("foxy"));
// // expected output: 16

// console.log (string.indexOf("ydog"));

// for (let k = 0; k < 8; k++) {
//     let str = ''

//     console.error(str)
//     console.warn("k = " + k)
//     for (let i = 0; i < 8; i++) {
//         str += ' ';

//         console.error(str)
//         console.warn("i = " + i)
//     }
//     for (let j = 0; j < 2; j++) {
//         str += '  ';
//         console.error(str)
//         console.warn("j = " + j)
//     }

// }

// Home work 1

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   str = '';
//   for (let j = 0; j <= n - i; j++) {
//     str += '  ';
//   }
//   for (let k = 1; k <= i; k++) {
//     str += k + " ";
//   }
// console.log(str);
// }

// Home Work 2
// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += i + " ";
//   }
//   console.log(row);
// }

// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += i + " ";
//   }
//   console.log(row);
// }

// Home work 3

// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k + " ";
//   }
//   console.log(row);
// }

// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k + " ";
//   }
//   console.log(row);
// }

// Home work 4

// let n = 15;

// for (let i = 1; i <= n; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("Superstar Rajnikanth");
//   } else if (i % 3 == 0) {
//     console.log("Superstar");
//   } else if (i % 5 == 0) {
//     console.log("Rajnikanth");
//   } else {
//     console.log(i);
//   }
// }

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     string += "."
//     console.log(string)
// }

// let n = 3;
// // Repeat n times
// for(let i = 1; i <= n; i++) {
// 	//spaces + sequence of numbers
// 	console.log( getSpaces((n - i + 1)) + getNumSequence(i));
// }
// for(let i = 1; i <= n; i++) {
// 	//spaces + sequence of numbers
// 	console.log( getSpaces((i + 1)) + getReverseNumSequence(n - i));
// }

// //console.log( getSpaces(3) + getNumSequence(1));

// //console.log( getSpaces(2) + getNumSequence(2));

// //console.log( getSpaces(1) + getNumSequence(3));

// function getSpaces(n) {
// 	let str = "";
// 	for(let i = 1; i <= n ; i++) {
// 		str = str + " ";
// 	}
// 	return str;
// }

// function getNumSequence(n) {

// 	let numseq_str = "";
// 	for(let i = 1; i <= n; i++) {
// 		numseq_str = numseq_str + i + " ";

// 	}
// 	return numseq_str;
// }

// //Reverse half diamond
// 	//Repeat 2 times
// 		// spaces + sequence in reverse of numbers
// function getReverseNumSequence(n){

//     let Reversenumseq_str = "";
// 	for(let i = 1; i >= n; i--) {
// 		Reversenumseq_str = Reversenumseq_str + i + " ";

// 	}
// 	return Reversenumseq_str;

// }

// let n = 4;

// for (let i = 1; i <= n; i++) {
//   console.log(getSpaces(n - i) + getHalfSequence(i) + getAnotherHalfSequence(i - 1));
// };

// for (let i = 1; i < n; i++) {
//   console.log(getSpaces(i) + getHalfSequence(n - i) + getAnotherHalfSequence(n - i - 1));
// };

// function getSpaces(n) {
//   let spaces = "";
//   for (let i = 1; i <= n; i++) {
//     spaces += "  ";
//   };
//   return spaces;
// };

// function getHalfSequence(n) {
//   let sequenceOne = "";
//   for (let j = 1; j <= n; j++) {
//     sequenceOne += j + " ";
//   };
//   return sequenceOne;
// };

// function getAnotherHalfSequence(n) {
//   let sequenceTwo = "";
//   for (let k = 1; k <= n; k++) {
//     sequenceTwo = k + " " + sequenceTwo;
//   };
//   return sequenceTwo;
// };

// let n = 3;
// let d = 1

// for (let i = 1; i <= n; i++) {
//   let str = "";

//   for (let j = 1; j <= (i * 2) - 1; j++) {

//     str += d++;

//   }
//   console.log(str);
// };


// To Find the MaxValue
let a = [5, 4, 8, 10, 39, 533];
let maxValue = a[0]
let minValue = a[0]

for(i = 1; i < a.length; i++){
  if(maxValue < a[i]){
    maxValue = a[i]
  }
  if(minValue > a[i]){
    minValue = a[i]
  }
  
}

console.log(maxValue);
console.log(minValue);

// To Find the MinValue
// let b = [5, 4, 8, 10, 39, 533];
// let minValue = b[0]

// for(i = 1; i < b.length; i++){
//   if(minValue > b[i]){
//     minValue = b[i]
//   }
// }

// console.log(minValue);
