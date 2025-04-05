# Prototype

# Background functioning of new
The text in the image explains what happens behind the scenes when the new keyword is used in JavaScript. Here’s a breakdown of the process:

A new object is created
When you use the new keyword, JavaScript creates a brand-new object.

A prototype is linked
The newly created object is linked to the prototype property of the constructor function.

This allows the new object to inherit properties and methods from the constructor’s prototype.
The constructor is called
The constructor function is executed, and this is bound to the newly created object.
If the constructor function doesn’t explicitly return another object, JavaScript assumes this should be returned.

``` js
function Hero(name) {
    this.name = name;
    this.power = "Super strength";
}

const hulk = new Hero("Hulk");

console.log(hulk.name);  // Output: Hulk
console.log(hulk.power); // Output: Super strength

```
##### In this example:
The new keyword creates a new object.
The object is linked to Hero.prototype.
The Hero constructor is executed with this bound to the new object.
The new object is returned.


#### A Prototype is Linked:
When a new object is created, it is linked to the prototype property of the constructor function. This allows the object to access properties and methods defined on the constructor's prototype.

#### The Constructor is Called:
The constructor function is invoked with the specified arguments, and this is bound to the newly created object. If no explicit return value is provided, JavaScript assumes this (the newly created object) as the intended return value.

#### The New Object is Returned:
After the constructor function is called, if it does not explicitly return a non-primitive value (such as an object, array, or function), the newly created object is automatically returned.

