// let arr=[1,2,3,4]
// console.log(arr)

// let arr=[21,"sonu",7234,'Ram']
// console.log(arr)

// // Array constructer
// let arr=new Array(21,"sonu",7234,'Ram')
// console.log(arr)


// // Object
// let Object={
//     Name:'Sonu',
//     Age:20,
//     Course:'Btech',
//     Branch:'CSE_D',
//     Question:function(){
//        console.log("hello! everyone ,kese ho sarre")
//     }
// };
// console.log(Object)
// console.log(typeof(Object))
// Object.Question();


// // Array built in functions
// let arr=new Array(21,"sonu",44,7234,'Ram',566465,'s');
// arr.push(12)
// arr.unshift(1)
// arr.pop()
// arr.shift()
// console.log(arr)
// console.log(arr.slice(1,4))
// arr.splice(1,0,'Chintu')
// console.log(arr)
// arr.splice(1,4,'Chintu')
// console.log(arr)

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let ans=arr.map((number) => {
//     return number**2;
// })
// console.log(ans)

// let arr=[1,2,3,4,5,6,7,8,9,10]
// arr.map((number,index) => {
//     console.log(number**2)
//     console.log(index)
// })

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let ans=arr.filter((number) => {
//     // return number%2==0;

//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans)


// let arr=[1,2,3,4,5,6,7,'Ram',8,9,'sonu',10]
// let ans=arr.filter((value) => {

//     if(typeof(value)=='string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans)

// let arr=[10,20,50,90,130,500,700]
// let ans=arr.reduce((acc,curr) =>{
//     return acc+curr;
// },0);
// console.log(ans)


// let arr=[5,6,2,90,10,1];
// let ans=arr.sort();
// console.log(ans);

// let arr=[5,6,2,90,10,1];
// let ans=arr.indexOf(10)
// console.log(ans)


// // For-each
// let arr=[5,6,2,90,10,1];
// arr.forEach((element ,index) => {
//     console.log("Number :",element," index :",index)
// });


// For-in
// let Object={
//         Name:'Sonu',
//         Age:20,
//         Course:'Btech',
//         Branch:'CSE_D',
//     };
// for( let key in Object){
//     console.log(key,":",Object[key])
// }


// // for-of
// let arr=[1,2,33,4,5,6,5]
// for( let value of arr){
//     console.log(value)
// }

// let arr="Sonu bhardwaj"
// for( let value of arr){
//     console.log(value)
// }




// let arr=[23,4,5,7,8,9,6,4,333,2,21,1,1,4]
// function sum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum;
// }
// let arrSum=sum(arr);
// console.log(arrSum);



let arr=[23,4,5,7,8,9,6,4,333,2,21,1,1,4]
function sum(arr){
    let sum=0;
    arr.forEach(element => {
        sum=sum+element;
    });
    return sum;
}
let arrSum=sum(arr);
console.log(arrSum);
