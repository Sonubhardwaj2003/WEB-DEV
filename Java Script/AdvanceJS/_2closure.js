function outer(){
    let counter=4;
    return function(){
        counter++;
        return counter;
    }
}
//retain memory
let output=outer();
console.log(output());
console.log(output());
