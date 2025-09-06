function fatchData(){
    //Promise keywordis use for promises in java script , with two perameters,any
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let sucess=true;
            if(sucess){
                resolve("Data is fatched Successfully");
            }
            else{
                reject("Error to fatching the data");
            }
        }, 3000);
    });
}

// fatchData()
//     .then((data) => console.log(data)) //store data whatever thrown by resolve
//     .catch((error) => console.log(error)) // store data whatever thrown by reject

fatchData()
    .then((data) => {
        console.log(data);
        return data.toUpperCase();
    }) //store data whatever thrown by resolve
    .then((value) => {
        console.log(value);
    }) // then chaining ,store data thrown by upper then 
    .catch((error) => console.log(error)) // store data whatever thrown by reject