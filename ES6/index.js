/*
  //Spread Operator
let obj = {
  name : "Nikki",
  age : 21
};
let obj1 = {
  ...obj,
  phone : 5500
};
let obj2 = {
  ...obj,
  ...obj1
};
console.log(obj2);

//Rest Operator

function product(...x) {
  let multi = 1;
  for(let i =0; i<x.length;i++){
    multi *= x[i];
  }
  return multi;
}
console.log(product(1,2,3,4))
*/
//2d array
let array = [
  [3,4,5,6],
  [6,6,2,0],
  [9,4,6,8],
  [0,9,2,5]
];
let r = 4;
let c = 4;

for(let i = 0;i<r;i++){
  console.log(array[i][c-i-1])
}