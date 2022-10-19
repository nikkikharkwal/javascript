//Given a string print, the number of times each character appears.

let sentence = "Given a string print, the number of times each character appears";

let noOfTimes = {};

for(let i = 0; i < sentence.length; i++){
  let key = sentence[i];
  let count = 0;
  for(let j = 0; j < sentence.length; j++){
    if(sentence[i]===sentence[j] && i > j){
       break; 
    }
    if (sentence[i] == sentence[j]) {
      count++;
    }
  }
  if(count > 0 ){
    noOfTimes[key] = count;
  }
}

console.log(noOfTimes);
