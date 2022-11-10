/*
PROBLEM 2
Problem 2
Write code to calculate the average of an array
If there are no items in the array it should return 0
NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
Do this Problem using Arrow Function
*/
let a = [1,2,3,4,5,6]
let x = a.reduce((n1,n2)=> {
  return n1 + n2;
})
if(a.length==0){
  console.log(0)
}
else {
  console.log(x/a.length)
}