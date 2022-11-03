/* Write code to calculate the average of an array
If there are no items in the array it should return 0
NOTE: Create a function to find the sum of elements in an array and use that function to find out the average
*/
function sum (arr) {
  let sum1 = 0;
  for(let i =0; i < arr.length;i++){
    sum1 += arr[i];
  }
  return sum1;
}

let arr = [1, 2, 3, 4];
console.log(sum(arr)/arr.length);