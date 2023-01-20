//Print the character present at the index number 2 of each string in a new line.
let arr = ["Aman", "Rahul", "Chunnu", "Shweta", "Sanchi",  "Shivansh"];
 for (let i = 0; i<arr.length; i++){
   console.log(arr[i][2]);
 }

//Given an array of names count the number of names starting from "a" or "A".

let arr1 = ["Aman", "Anshul", "Pulkit" , "Chunnu", "ashwini", "Shweta"];
let count = 0;
for (let i = 0; i < arr1.length;  i++){
  if(arr1[i][0]=="A" || arr1[i][0] == "a"){
    count++;
  }
}console.log(count)