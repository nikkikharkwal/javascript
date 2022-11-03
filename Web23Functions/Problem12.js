//Problem 1. Write a custom function that has the same behavior of inbuilt Array Join

const elements = ['Fire', 'Air', 'Water'];
function custom(arr,a){
  if(arr.length==0){
    return 0;
  }
  if(a==null){
    a=","
  }
  bag="";
  for(i=0;i<arr.length;i++){
    if(i==arr.length-1){
      bag+=arr[i];
    }else{
    bag+=arr[i]+a;}
  }
  return bag;
}

console.log(custom(elements," "));