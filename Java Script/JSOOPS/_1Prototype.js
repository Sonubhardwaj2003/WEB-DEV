let cse={
    name:"Sonu"
};

let aiml={
    sec:4
};

console.log('cse = ',cse);
console.log('aiml = ',aiml);
console.log(cse.name);

// aiml access the properties of cse(we can done same fo cse to acces the properties of aiml)
Object.setPrototypeOf(aiml,cse);
console.log(Object.getPrototypeOf(aiml));
