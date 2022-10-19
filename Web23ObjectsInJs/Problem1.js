//Given an array find the unique items in the array.

let names = ["Nikki", "Vaibhav", "Rakshit", "Nishant", "Nikki"];
let uniqNames = {};

for(let i = 0; i < names.length; i++){
  let key = names[i];
  uniqNames[key] = 1;
}
console.log(uniqNames);