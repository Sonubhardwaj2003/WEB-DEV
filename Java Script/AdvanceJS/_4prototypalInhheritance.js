function Student(name){
    this.name=name;
}

Student.prototype.greet=function(){
    console.log(`hello i am ${this.name}`);
}

let call=new Student("Sonu");
call.greet();
