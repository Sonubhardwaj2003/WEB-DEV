// Base class
class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    displayInfo() {
        return `Name: ${this.name}, ID: ${this.id}`;
    }
}

// Derived class - Manager
class Manager extends Employee {
    constructor(name, id, department) {
        super(name, id);
        this.department = department;
    }

    manageTeam() {
        return `${this.name} manages the ${this.department} department.`;
    }
}

// Derived class - Developer
class Developer extends Employee {
    constructor(name, id, programmingLanguage) {
        super(name, id);
        this.language = programmingLanguage;
    }

    writeCode() {
        return `${this.name} writes code in ${this.language}.`;
    }
}

// Create instances
const mgr = new Manager("Sonu", 101, "Sales");
const dev = new Developer("Rohan", 102, "JavaScript");

// Displaying their behavior
console.log(mgr.displayInfo());
console.log(mgr.manageTeam());

console.log(dev.displayInfo());
console.log(dev.writeCode());





// class Area{
//     constructor(radius,height,breadth,length){
//         this.breadth=breadth;
//         this.length=length;
//         this.height=height;
//         this.radius=radius;
//     }

//     print(){
//         console.log("Main class");
//     }
// }

// class Circle extends Area{
//     area(){
//         return `area of circle is : ${Math.PI*this.radius*this.radius}`;
//     }
// }

// class Rectangle extends Area{
//     area(){
//         return `area of rectangle is : ${this.length*this.breadth}`;
//     }
// }

// class Cuboid extends Area{
//     area(){
//         return `Area of cuboid is: ${2 * (this.length * this.breadth + this.breadth * this.height + this.height * this.length)}`;
//     }
// }


// // Instantiate each class with appropriate values
// let circle = new Circle(10);              // radius only
// let rectangle = new Rectangle(null, null, 5, 8); // breadth and length
// let cuboid = new Cuboid(null, 6, 4, 10);  // height, breadth, and length

// // Output areas
// console.log(circle.area());    // Area of circle
// console.log(rectangle.area()); // Area of rectangle
// console.log(cuboid.area());    // Surface area of cuboid
// console.log(circle.print());


