/* Write a function isOdd which returns a boolean value based on the number is odd or not
Use this function to print the odd numbers from 0 to a given limit(included)
*/
function isOdd (num) {
  let number = false;
  if(num%2==1){
    number = true;
  }
  return number;
}
console.log(isOdd(44));
console.log(isOdd(89));
console.log(isOdd(13));
console.log(isOdd(78));