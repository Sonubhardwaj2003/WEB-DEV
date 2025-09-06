// 1.declaring an arry teaflavour . and store the first element in the variable.....
let teaFlavour=["green tea","black tea","oolong tea"];
// let teaFlavour=new Array("green tea","black tea","oolong tea");
let firstTea=teaFlavour[0];
console.log("1. ",firstTea);


// 2.change the second element of array..
let teatypes=["herbal tea","white tea","masala teai"]
teatypes[1]="jasmine tea";
console.log("2. ",teatypes);


// 3. berlin to the arry using the "push" method..
let citiesvisited=["Mumbi","Sydeny"]
citiesvisited.push("Berlin","India","...");
console.log("3. ",citiesvisited);


// 4.remove last element using the pop methode and store it in the an another variable..
let teaOrders=["chai","ice tea","matcha","earl grey"];
let lastOrder=teaOrders.pop();
console.log("4. ",teaOrders);
console.log("    Removed one : ",lastOrder);


//5. create a "soft copy" of an array..
let populartea=["green tea","oolong tea","chai"]
// let softCopyTea=populartea.copyWithin();
let softCopyTea=populartea;
console.log("5. ",softCopyTea)


// 6.create a "hard copy" of an array..
let topcities=["delhi","Jaipur","Chandigardh"]
let hardCopy=[...topcities];
// let hardCopy=topcities.slice();
console.log("6. ",hardCopy);


//7. merging of two arrays
let a=["india","usa","austrila"]
let b=["japan","Chaina","russia"]
// let c=a+b;
// let c=[a,b];
let Merged=a.concat(b);
console.log("7. ",Merged);

// many more methods..
console.log("<<------->>");
let arr=[1,2,3,4];
console.log(arr.indexOf(3));
console.log(arr.reverse());
console.log(arr.length);
console.log(arr.includes(4));
console.log(arr.splice(1,3,2))
console.log(arr.splice()); //splice clear the complete arr
