//Map
let arr = [2, -5, 10, 20, 30];

let a = arr.map((index, array) => {
  return (array*index);
})
console.log(a)

//Filter
let array=[1,2,4,5,7,8,9,56,4];
let b = array.filter((num) => {
  if(num%2==0){
    return num;
  }
})
console.log(b)

//for Each 
let ar = [2,-5,10,20,30];
ar.forEach((element) => {
  console.log(element*element);
})

