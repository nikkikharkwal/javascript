//Problem 2 : Given an array of string count the overall total number of characters.

let array = ["iaa", "hello", "Holdrt", "Noymno"];


let a = array.toString();
let count = 0;
for(let i = 0; i < a.length; i++){
  if(a[i]==","){
    count++;
  }
}
console.log((a.length)-count)

