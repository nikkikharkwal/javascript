/*
Problem 1: Print the Calendar date in the below format
1-1
2-1
3-1
.
.
.
.
.
31-1
.
.
.
.
.
31-12
*/
let day ;
for  (let i = 1; i <= 12; i++){
  if(i==2){
    day=28;
  }
  else if(i==4||i==6||i==9||i==11){
    day=30;
  }
  else{
    day = 31;
  }
  for(let j = 1; j <= day; j++){
  
    console.log(j,"-",i);
  }
}