let n = 4;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += i + " ";
  }
  console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= n - i; j++) {
    str += " ";
  }
  for (let k = 1; k <= i; k++) {
    str += i + " ";
  }
  console.log(str);
}