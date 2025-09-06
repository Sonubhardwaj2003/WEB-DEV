class Human{
 
    // properties
    // public decleration
    age=20;  
    ht;
    // private declaration
    #wt=75;

    // constructor
    constructor(newage,newht,newwt){
        this.age=newage;
        this.ht=newwt;
        this.#wt=newht;
    }

    // getter and setter methods
    get readweight(){
        return this.#wt;
    }
    set writeweight(val){
        this.#wt=val;
    }

    // behaviour or fanctionality
    walking(walk){
        console.log("I am Walking",walk," km");
    }
    running(){
        console.log("I am running");
    }

}

let obj=new Human(25,80,180);
 
console.log(obj.age);
console.log(obj.ht);
// weight cannot be print directly or directly accessable,as it is private.We need setter and getter method
// console.log(obj.#wt);

console.log(obj.readweight)
console.log(obj.walking(30))
console.log(obj.running())




// //Static Method
// class StaticMethod{
//     static sum(val1,val2){
//         return val1+val2;
//     }
// }
// console.log(StaticMethod.sum(20,30));
