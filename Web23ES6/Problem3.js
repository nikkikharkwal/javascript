/*
Problem 3
Write a function to convert a character to lower case
Use this function to convert a given word to lower case
Use that function to convert an array of strings to array of lower case strings
Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"]
Do this Problem using Arrow function.
*/
let x = ((a)=>{
  return a.toLowerCase();
})
let y = ((b)=> {
  let bag = "";
  for(let i =0 ;i<b.length;i++){
    bag += x(b[i])
  }
  return bag;
})

let  Input =  ["MA", "SA", "I", "SCH", "OOL"]
let arr = [];
for(let i =0; i<Input.length;i++){
  let n = y(Input[i])
  arr.push(n)
}
console.log(arr)