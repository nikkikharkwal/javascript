/*
Problem 4
Given a string swap the case and print the output
Sample Input - Test
Sample Output - tEST
NOTE: Use multiple functions to achieve the result, NOT one single code block
Do not use inbuilt functions and use Arrow function to do this problem
  */
let x = ((n)=> {
  let bag = "";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lower = "abcdefghijklmnopqrstuvwxyz"
  for(let i = 0;i<n.length;i++){
    for(let j =0; j<26;j++){
      if(n[i]==upper[j]){
        bag += lower[j]
      }
      else if(n[i]==lower[j]){
        bag += upper[j]
      }
    }
  }
  return bag;
})

let Input = "Test";
console.log(x(Input))