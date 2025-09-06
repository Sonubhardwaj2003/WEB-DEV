// 1. function creation and call 
function makeTea(typeOftea) {
    // console.log(`Making ${typeOftea}`);
    return `Making ${typeOftea}`;
}
let teaorder=makeTea("green tea");
console.log("1. ",teaorder);


// 2. nested function
function ordertea(teaType) {
    function confirmorder(s) {
        return s;
    }
    return confirmorder("2.  Order confirmed for chai");
}
console.log(ordertea());


// 3. arrow function 
let calculateTotal=(price,quantity) =>{
    return price*quantity;
}
// let calculateTotal=(price,quantity) => price*quantity;
let totalCost=calculateTotal(20,30)
console.log("3. ",totalCost);


// 4.first-class function 
function sayHello() {
    return "hello : ";
}
// passing the sayHello function as an argumnet to the sayName function
function sayName(helloMassage,name) {
    return helloMassage()+name;
}
let call=sayName(sayHello,"Sonu")
console.log("4. ",call);
