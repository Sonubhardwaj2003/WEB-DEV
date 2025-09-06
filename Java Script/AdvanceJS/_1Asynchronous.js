console.log('hello java script');

function hiii(){
    console.log("hii,How are you?");
}
// ashyncronous Behaviour
setTimeout(() => {
    hiii();
}, 5000);

for (let index = 0; index < 10; index++) {
    console.log(index);
}
