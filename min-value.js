//  Finding the Minimum value of array

let a = [10, 20, 100, 1, 2, 300, 1000];

let minValue = a[0];

for (let i = 0; i < a.length; i++) {
  if (minValue > a[i]) {
    minValue = a[i];
  }
}

console.log(minValue);