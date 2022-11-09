/*
Create an object with the following functionality

Ability to add 3 students details and their marks in 3 subjects
Method to find the student with the least total.
Method to find the student with the highest total.
  */

let details = {
  arr : [],
  add : function(name, phy, eng, math){
    let obj = {};
    obj.name = name;
    obj.phy = phy;
    obj.eng = eng;
    obj.math = math;
    this.arr.push(obj)
  },
  lowest : function() {
    let min = Infinity;
for(let i =0; i<= this.arr.length-1;i++){
  let total = this.arr[i].phy + this.arr[i].eng + this.arr[i].math;
  if(total < min) {
    min = total;
    low_student = this.arr[i].name;
  }
}
    console.log(low_student, min)
  },
  maximum : function() {
    let max = -Infinity;
for(let i =0; i<= this.arr.length-1;i++){
  let total = this.arr[i].phy + this.arr[i].eng + this.arr[i].math;
  if(total > max) {
    max = total;
    highest_student = this.arr[i].name;
  }
}
    console.log(highest_student, max)
  }
}
details.add("Nikki",80,92,94);
details.add("Vaibhav",98,99,97);
details.add("Rakshit",99,88,87);
details.lowest();
details.maximum();


