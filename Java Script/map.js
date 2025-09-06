// Map in javaScript

// it is the collection of key value air with some special feature:
// a)key can be of any type ;string ,number,object etc
// b)keeps the order of key as you insert them.

// how to create Map

// 1.Using new Map() and set()
let myExmple = new Map()
myExmple.set("name","Sonu Bhardwaj")
myExmple.set("age",21);
console.log(myExmple);

// 2.Passing an array of key value pair 
let examples=new Map([
    ["name","Sonu Bhardwaj"],
    ["age",21],
    ["section","D"]
])
console.log(examples)
console.log(examples.get("name"))
console.log(examples.get("age"))
// console.log(examples.has("age"))
// console.log(examples.delete("age"))
console.log(examples.set)


/*
some methods in Map
a) get(key ) return the value of key
console.log(myexample.get(name))
console.log(myexample.get(value))
b) has() method used to check if key exist or not
 */