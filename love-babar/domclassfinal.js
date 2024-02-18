// last most imp class 
// async js 
// sync - occurs at the same time , line by line 
//async - event loop thi thai savthi pela event call stack ma jai aane pachi te browser ma jai pachi browser e event queue 
// ma nakhi dei aane pachi jo call stack empty hoi toh te execute thai jai
// async code tyarej call thai jyare call stack empty hoi bakki biju badhu pela execute thai 
// API:- application programming interface
// features of async code
// promises
// syntax :- let p = new promise(function(resolve,reject))
// agar code succesfully chali gayo toh fullfilled aane na chailo toh reject thai jahe 

// async promises have two state resolve , reject .
let merePromise = Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("i am inside a promise");

    },3000);
    resolve(1236)
    reject(new console.error("eni mane aa error che "))
});
// two method use thai promise upar ek then ne catch then output mate 
// fetch api use to commnicuate the send and retrive the data 
let content = fetch('')// it will return promise 
 