function Student(name,age){
    this.name=name;
    this.age=age;
}
let detailStudent1 = new Student("Sonu",22)
let detailStudent2 = new Student("Harsh",20)
console.log(detailStudent1);
console.log(detailStudent2);
console.log("-------------");



function tea(type){
    this.type=type;
    this.describe=function(){
        return `this is ${this.type}`;
    }
}
let teatype=new tea("milk tea");
console.log(teatype.describe());
console.log(teatype);
console.log("------------");



function Rectangle(length,breadth){
    this.length=length;
    this.breadth=breadth;
}
// let value=function(){
//     return `length : ${this.length} and breadth : ${this.breadth}`;
// }
// let print=new Rectangle(50,100);
// console.log(print);
Rectangle.prototype.value=function(){
    return `length : ${this.length} and breadth : ${this.breadth}`;
}
let print=new Rectangle(50,100);
console.log(print.value());