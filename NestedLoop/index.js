//Father and Son duo, they have 5 farms , one day father asked son to plant 5 seeds in each farms.

for(let i = 1; i <=5; i++){
  for(let j = 1; j <= 5; j++){
    console.log("*", i)
  }
}



//Father is asking Son to plant 5 seeds in the 10 frams in horizontal manner


for(let i = 1; i <=10; i++){
let bag = "";
  for(let j = 1; j <= 5; j++){
    bag += "*" +" "
}
  console.log(bag)
  }


//Father is asking son to plant seed as per following:
//In farm 1 youhave to plant 1 seed.
//In farm 2 you have to plant 2 seed.
//In farm 3 youhave to plant 3 seed.
//In farm 4 youhave to plant 4 seed.

let bag = "";
for(let i = 1; i <=4; i++){
  for(let j = 1; j <= 1; j++){
    bag += "*" +" "
}
  console.log(bag)
  }


/*Output should be like this
1
*
12
**
123
***
1234
****
  */

for(let i = 1; i <= 4; i++){
  let bag1 = "";
  let bag2 = "";
  for(let j = 1; j <= i; j++){
    bag1 += j + " ";
    bag2 += "*" + " ";
  }
    console.log(bag1);
    console.log(bag2);
}
