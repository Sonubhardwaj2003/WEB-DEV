const person={
    name : "Sonu",
    greet(){
        console.log(`hii , i am ${this.name}`);
    },
}
//print output
person.greet();
//this keyword ,..only bind with first call,for second it not work..provide unefined
const anothercall=person.greet;
anothercall();

//bind with another name
const call=person.greet.bind({name:"John"});
call();