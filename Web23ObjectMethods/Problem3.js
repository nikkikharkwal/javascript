/*
### **Products Cart Object**

- Given an input of products in the below format (Name Quantity Price)
- Input

```
["Rice", "Dal", "Salt"]
[2, 3, 1]
[60, 50, 20]

```

- Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
- The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
- Sample output for the above case `290`
*/

let obj = {
  data : [],
  list : function(x,y,z) {
    let object = {};
    object.name = x
    object.quantity = y
    object.price = z
    this.data.push(object)
  },
  total : function(){
    let sum = 0;
    for(let i = 0; i<this.data.length;i++){
      sum += this.data[i].price * this.data[i].quantity;
    }
    return sum;
  }
};
 obj.list("Rice",2,60)
 obj.list("Dal",3,50)
 obj.list("Salt",1,20)
console.log(obj.total())
