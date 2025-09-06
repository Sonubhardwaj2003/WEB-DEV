// using console.log message is directly print on thr browser consol ,not on browser page,after this link to the index.html file
console.log("hii how are u");

// using doctument.write we can directly print our massage on the browser page ,link to the index.html file
// document.write("hello!!"

// an another method,ehch prints in the same line ,has no built in line for next
process.stdout.write("hloo everyone how are u");
process.stdout.write("----hloo everyone how are u");


console.log("");
console.table({"Sonu " : "bhardwaj"});
console.table({"Sonu , Ram" : "bhardwaj"});


let value=20;
let name="Sonu bhardwaj";
let istrue=true;
console.log(value,name,istrue);


// object
let city=["Rohtak","Bhiwani","jaipur","delhi"];
let user ={firstname:"Sonu",lastname:"bhardwaj"};
console.log(city,user);

console.log(user.firstname);
user.firstname="Shivang";
console.log(user.firstname);


