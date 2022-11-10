/*
Problem 1
Write a function isOdd which returns a boolean value based on the number is odd or not
Use this function to print the odd numbers from 0 to a given limit(included)
Do this using Arrow Function
*/

let N = 10;
let isOdd = ((n) => {
  if(n%2==1){
    return true;
  }
  else {
    return false;
  }
})

for(let i = 1; i<N;i++){
  if(isOdd(i)==true){
    console.log(i)
  }
}