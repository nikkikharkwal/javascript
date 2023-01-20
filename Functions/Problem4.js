//Problem 4: Write a function to check if the char is a small case or not.

function check (char) {
  let lower = false;
  let str = "abcdefghijklmnopqrstuvwxyz";
  for(let i =0; i<str.length;i++){
    if(str[i]==char){
       lower = true;
      break;
    }
  }
  return lower;
}

console.log(char = check("B"))
