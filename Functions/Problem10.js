/* Write a function to convert a character to lower case
Use this function to convert a given word to lower case
Use that function to convert an array of strings to array of lower case strings
Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"]
*/
let Input = ["MA", "SA", "I", "SCH", "OOL"];
let Output = [];

for(let i =0; i < Input.length;i++){
let lower = Input[i].toLowerCase();
  Output.push(lower);
}
console.log(Output);