//Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

let a = [1,2,4,2,3,5]
let x=custom(a,2,-3)
console.log(x);
function custom(a,index,l){

 
 let high= -Infinity
 if(l+a.length-1>0 && l+a.length-1<a.length){
l=l+a.length;
}
let c=l;
 for(let i=0;i<=c;i++){
  if((a[i]==index)&&i>high){
    high=i;
   }
 else if(high==-Infinity) {
   high=-1;
   }
 }
 return high;}