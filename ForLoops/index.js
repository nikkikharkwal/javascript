//Print number from 1 to 5

let sum = "";

for (let i = 0; i <= 5; i++) {
  sum += i
}

  console.log(sum)


//Print numbers from 10 to 1

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Print number from 10 to in horizontal manner

let nik = "";
for (let i = 10; i >= 1; i--) {
  nik += i;
}
console.log(nik)

//Print Odd numbers in between 1 and 20 in horizontal

let odd = "";
for (let i = 1; i<=20;i++) {
  if(i%2!=0){
    odd += i + " ";
  }
}
    console.log(odd);

//I want the following output
//1-*2-*3-*4-*

let num = "";
for (let i = 1; i <=4; i++) {
  num += i + "-*"
}
console.log(num);

//Print the sum of those numbers that are divisible by 2 or 5 between a range of 1 and 15.

let sum1 = 0;
for(let j = 1; j<= 15; j++) {
  if(j%2==0 || j%5==0) {
    sum1 += j;
  }
}
console.log(sum1)


//Write a code to calculate the factorial of any given number.
let num2 = 7 ;
let factorial = 1;
for (let i = 1; i<= num2; i++) {
  factorial *= i;
}
console.log(factorial)

//Calculate the average of even number in the range of 1 to 50


let sum3 = 0;
let count = 0;
for (let i=1; i<=50; i++) {
  if (i%2==0){
    
  sum3 += i;
  count++;
  }
}
console.log("Average is", sum3/count)