let details = {
  name : "Nikki",
  age : 21,
  city : "UK",
}
console.log(details);

//Print odd 
let input = [2,5,6,6,8,7,7,10]
let sum = "";
for(let i = 0; i < input.length; i++){
  if(i%2!==0){
   sum += input[i] + " ";
  }
}
  console.log(sum);

//Given an array find out the number of elements for which both the neighbors are greater than the element?

let arr = [5,7,6,9,8,10];
let sum2 = "";
for(let i = 0; i < arr.length; i++){
  if(arr[i-1] > arr[i] && arr[i] < arr[i+1]){
    sum2 += arr[i] + " ";
  }
}
console.log(sum2);


//Given a string of any lower case English alphabets, print all the characters in the string that are vowels. If no vowels exist print not found.

let Char = "Nikki";
let sum3 = "";
let count = 0;
for(let i = 0; i < Char.length ; i++){
  if(Char[i]=="a"||Char[i]=="e"||Char[i]=="i"||Char[i]=="o"||Char[i]=="u"){
    sum3 += Char[i] ;
    count++;
  }
}
if(count >= 1){
  console.log(sum3);
}
else {
  console.log("Not Found");
}

//Given a string figure out if it's a palindrome.

let word = "madam";
let count1 = 0;
for(let i = 0; i < word.length ; i++){
  if(word[i]==word[word.length - 1 - i]){
    count1++;
  }
}
if(count1==word.length) {
  console.log("true");
}
else {
  console.log("false");
}