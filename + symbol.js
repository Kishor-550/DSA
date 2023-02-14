let n = 3;
for (let i = 1; i < n - 1; i++) {
  console.log(space(n) + firstLoop(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(space(n) + firstLoop(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(space(n) + firstLoop(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(number(n) + firstLoop(n) + number(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(space(n) + firstLoop(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(space(n) + firstLoop(n));
}
for (let i = 1; i < n - 1; i++) {
  console.log(space(n) + firstLoop(n));
}
function firstLoop(n) {
  for (let i = 1; i < n; i++) {
    let run = i + " ";
    return run;
  }
}
function number(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += "3 ";
  }
  return str;
}
function space(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += "  ";
  }
  return str;
}