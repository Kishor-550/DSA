//  Finding the Maximum value of array

let a = [10, 20, 100, 1, 2, 3000, 1000];

let maxValue = a[0];

for (let i = 1; i < a.length; i++) {
  if (maxValue < a[i]) {
    maxValue = a[i];
  }
}

console.log(maxValue);