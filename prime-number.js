// Finding a prime number

let n = 27;
let isMatch = false;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    isMatch = true;
    break;
  } else {
    isMatch = false;
  }
}

if (isMatch == true) {
  console.log(n + " is not a prime number");
} else {
  console.log(n + " is a prime number");
}