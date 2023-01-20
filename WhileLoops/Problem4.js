// Problem 4: Print the average of even numbers from 1 to 100 (both included)

let num = 1;
let sum = 0;
let count = 0;

while (num <=100) {

  if(num%2==0) {
    sum = sum + num;
    count++;
  }
  num++;
}
console.log(sum/count);