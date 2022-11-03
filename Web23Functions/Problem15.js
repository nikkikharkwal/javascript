//Write a custom function that has the same behavior of inbuilt String Substring Function
const str = 'Google';
function custom(str,start,end){
  if(end>str.length){
    end=str.length;
  }
  if(end<start){
    temp=end;
    end=start;
    start=temp;
    }
  if(end==undefined){
    end=str.length;
  }
  let bag="";
  for(let i=start;i<end;i++){
    bag+=str[i];
  }
  return bag;
}
console.log(custom(str,0,4));

