/*
Problem-1 Rectangle Object

Create a rectangle object with length and width properties
Create two methods area and perimeter, that will return the area and perimeter of the rectangle
*/

let rectangle = {
  length : 10,
  width : 20,
  area : function(){
    return this.length*this.width;
  },
  perimeter : function(){
    return (2*this.length + 2*this.width);
  }
}
console.log(rectangle.area())
console.log(rectangle.perimeter())