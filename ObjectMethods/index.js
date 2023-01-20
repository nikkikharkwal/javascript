//wrute an object method to print your name and the place you are from.

let obj = {
  details : function() {
    console.log("Nikki");
    console.log("Nainital");
  }
}
obj.details();

//object method to calculate area and perimeter of rectangle.
let object = {
  length : 20,
  width : 30,
  area : function() {
    console.log(this.length * this.width);
  },
  perimeter : function() {
    console.log(2*this.length + 2*this.width);
  }
}

object.area();
object.perimeter();

//declare an object method.
let details = {
  name : "Nikki",
  age:21,
  hobbies : ["coding", "reading", "biking"],
  output : function() {
    console.log("NAME :" , this.name);
    console.log("AGE :" , this.age);
    console.log("My hobbies are" , this.hobbies.join());
  }
}
details.output();