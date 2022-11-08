/*
Problem 1: Find the average of elements present at odd index of the following array.
let arr = [10, 24, 56, 72, -10, -88, 100, 564];
*/
let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let x = arr.reduce((x1,x2) => {
  return x1 + x2;
})
console.log(x/arr.length)