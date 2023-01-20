//Write a custom function that has the same behavior of inbuilt Array Includes Function

const pets = ['cat', 'dog', 'bat'];


function custom(arr,inc,limit){
let count=false;
  if(limit==undefined){
    limit=0;
  }
if(limit>=arr.length){
    return count;
  }
 if(limit<0){
   limit=arr.length+limit;
 }
for (let i=limit;i<=arr.length-1;i++){
  if(arr[i]===inc){
   count=true;
    break;
  }
  else{
    count=false;
  }
  
}
  return count;
}
console.log(custom(pets,'dog'))  