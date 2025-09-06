// global scope => access any where

var age=20;
console.log(age);

if(true){
    console.log(age);
}

for(let i=0;i<=2;i++){
    console.log(age);
}

function myAge(){
    console.log(age);
}
myAge(age);


//function scope => access within function scope

// function myAge(){
//     var age=30;
//     console.log(age);
// }
// // outside the scope it give error
// // console.log(age);
// myAge();


// block scope => access within thr scope,{}

// {
//     let age=50;
//     console.log(age);
// }
// // outside the scope not accessable give error
// // console.log(age);