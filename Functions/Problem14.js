//Write a custom function that has the same behavior of inbuilt Array Slice Function

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];


function custom(array,start,end){
  if(start==undefined){
    start=0;
  }
  if(end<0){
    end=end+array.length;
  }
  if(end == undefined){
    end=array.length;
  }
  if(start<0){
    start=array.length+start;
  }
let arr=[];
for(let i=start;i<end;i++){
  arr.push(array[i]);
}
return arr;}

console.log(custom(fruits,2,3))
