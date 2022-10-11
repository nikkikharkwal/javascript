/*
  let a = 10;
let c = ++a;
let b = 10;
let d = b++;

console.log(a, b, c, d)

let a1= 6;
let b1 = a1--;
let c1= 10;
let d1 = --c1;
console.log(a1,b1,c1,d1)

//Print The Counting from 1 to 10

let x = 1;
while(x <= 10) {
  console.log(x);
  x++;
}
*/

let a=10;
let b=11;
if(a**b>=1000) {
  if(a==b || a>=b){
    if(a!=b) {
      a=a*b;
      b=b/a;
    }
  }
      console.log(a);
      console.log(b);
}