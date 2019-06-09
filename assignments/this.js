/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 'this' binds to the window when in the global context. 
* 2. Methods called by '.' bind 'this' to the object left of the dot.
* 3. When using a constructor function, 'this' binds to the specific instance of the obj.
* 4. Using '.bind', 'call', or '.apply' explicitly binds 'this' to the object paramater of those methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this.innerWidth); //test using index.html and live extension, check console.

// Principle 2

// code example for Implicit Binding

const myObj = 
{
    name: "blah",
    sayName: function() {console.log(`Hello, my name is ${this.name}.`);}
}
myObj.sayName();

// Principle 3

// code example for New Binding

function Person(personAttrs) 
{
    this.name = personAttrs.name;
    this.age = personAttrs.age;
    this.speak = function() {console.log(`Hello, my name is ${this.name}, and I'm ${this.age} years old.`)}
}

const guy = new Person(
    {
        name: "Guy",
        age: 25
    }
);
guy.speak();

// Principle 4

// code example for Explicit Binding

const gil = new Person(
    {
        name: "Gil",
        age: 30
    }
);

guy.speak.call(gil);
gil.speak.apply(guy);