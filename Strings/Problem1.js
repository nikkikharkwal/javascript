//Problem 1 : Given a string count the number of words in that string.

let sentence = "Given a string count the number of words in that string"

let count = 0;
for(let i = 0; i< sentence.length; i++){
  if(sentence[i]==" "){
    count++;
  }
  
}
console.log(sentence.length - count);