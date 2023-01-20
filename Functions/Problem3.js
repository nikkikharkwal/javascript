//Problem 3: Use the same function to print Non-Primes from 2 to a given limit.


function prime (num) {
  let count = 0;
  for(let i = 2; i < num; i++){
    if(num%i==0){
      count++;
    }
  }
  if(count>= 1){
    return false;
  }
  else {
    return true;
  }
}

for (let i = 2; i <= 25; i++){
  if(prime(i)==false){
    console.log(i, "is not a prime number");
  }
}