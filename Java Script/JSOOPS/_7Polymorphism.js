class Bird{
    fly(){
        return `birds can fly`;
    }
}

class Loin extends Bird{
    //method overriding : runtime Polymorphism
    fly(){
        return `Loin cannot fly`;
    }
}

let bird=new Bird();
let loin=new Loin();
console.log(bird.fly());
console.log(loin.fly());
