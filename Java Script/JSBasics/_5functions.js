// Function 

// function f(){
//     for(let i=1;i<=10;i++){
//         console.log(i)
//     }
// }
// f()


// function f(n){
//     for(let i=1;i<=n;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// f(20)


// function sum(m,n){
//     let a=m+n;
//     // console.log("Sum is :",`${a}`)
//     console.log("Sum is : ",a)
// }
// sum(20,10)


// Return function

// function multiplication(m,n){
//     return m*n;
// }
// multiplication(10,2);


// function multiplication(m,n){
//     return m*n;
// }
// let ans=multiplication(10,2);
// console.log(ans);
// // to use the return function we have to store the vale first in a varible ,than print it usin consol.log


// function multiplication(m,n){
//     return m*n;
//     //Unreachable statements
//     let a=10;b=10;
//     ans=a*b;
// }
// let ans=multiplication(10,2);
// console.log(ans);


// function store in a varible
// const div=function(m,n){
//     return m/n;
// }
// console.log(div(10,2));


// let even=function(n){
//     for(let i=1;i<=n;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }
// even(50);

// Arrow function
let pow=(x,y) => {
    return x**y;
}
let ans=pow(2,10);
console.log(ans);