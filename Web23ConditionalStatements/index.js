// There are two variables given . Print both are equal if both the variables are equal.
let a = 10;
let b = 10;
if (a==b) {
  console.log("Both are Equal");
}

// Rahul purchased items worth 4000, there is deal of 10% discount if the bill is more than or equal to 3999. Print "Got Discount" if he is eligible else print "Not Eligible".
let BillAmount = 4000;
let discount = 3999;

if (BillAmount >= discount) {
  console.log("Got Discount");
}
else {
  console.log("Not Eligible");
}

// Rahul purchased items worth 4000, there is deal of 10% discount if the bill is more than or equal to 3999. Print the new bill amount if he is eligible, else print "Not Eligible".

if (BillAmount >= discount) {
  console.log("New Bill is", BillAmount - (1/10*BillAmount));
}
else {
  console.log("Not Eligible");
}