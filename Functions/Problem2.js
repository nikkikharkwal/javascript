//Problem 2: Use the above function to print the Primes from 2 to a given limit.

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
  if(prime(i)==true){
    console.log(i, "is a prime number");
  }
}