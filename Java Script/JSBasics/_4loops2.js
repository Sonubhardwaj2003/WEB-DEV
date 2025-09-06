// 1.while loop,to find sum
let sum=0
let i=1
while(i<=5){
    sum+=i;
    i++;
}
console.log("1. Sum: ",sum);


//2. to store value in arr.
let arr=[]
let j=0;
while (j<5) {
    // arr[j]=j+1;
    arr.push(j+1);
    j++;
}
console.log("2. ",arr);


// // 3.do-while loop, teacollection ,stop the loop when encountered the stop
// let teacollection=[]
// let tea;
// do{
//     tea=input("Enter the tea type");
//     if(tea!=="stop"){
//         teacollection.push(tea);
//     }
// }while (tea!=="stop");  //run on browser console,prompt not supported by the vscode


// 4.sum using do-while
let k=1;
let total=0;
do {
    total+=k;
    k++;
} while (k<=3);
console.log("4. ",total);


// 5.for-loop ,multiply each element by two
let array=[2,4,6]
let multipliedNumbers=[]
for(let i=0;i<array.length;i++){
    multipliedNumbers.push(array[i]*2);
}
console.log("5. ",multipliedNumbers);


// 6. use break -- continue
let tea=["green tea","black tea","chai","oolong tea"]
let selectedtea=[];
let index=0;
for(let i=0;i<tea.length;i++){
    if(tea[i]=="chai"){
        break;
        // continue;
    }
    selectedtea[index]=tea[i];
    index++;
}
console.log("6. ",selectedtea);


// 7.for-of loop (with break and continue)
let number=[1,2,3,4,5]
let samllNumber=[]
for (const num of number) {
    if(num==4) break;
    // if(num==4) continue;
    samllNumber.push(num);
}
console.log("7. ",samllNumber);


// 8.for-in loop (with break and continue)
let citiesPopulation={
    "london":890000,
    "NewYork":840000,
    "Berlin":760000,
    "Paris":2000000,
};
let citiesPop={};
// console.log(Object.keys("8. ",citiesPopulation));
// console.log(Object.values("  ",citiesPopulation));
for (const city  in citiesPopulation){
    if(city == "Berlin") break;
    // citiesPop[city]=citiesPopulation[city];

}
console.log("8. ",citiesPop);


// 9. for-in loop
let worldcities={
    london:890000,
    NewYork:840000,
    Berlin:760000,
    Paris:200000,
}
let largecities={}
for (const city in worldcities) {
    if(worldcities[city]<300000) continue;
    largecities[city]=worldcities[city];
}
console.log("9. ",largecities);


// /10.for-each loop (return === continue)
let teas=["green tea","black tea","chai","oolong tea"]
let avaliableTea=[];
teas.forEach(tea => {  //'=>' indicates the function()
    if(tea=="chai") return;  //for function we have not to use the break/continue statements ,use return
    avaliableTea.push(tea);
});
console.log("10. ",avaliableTea);
