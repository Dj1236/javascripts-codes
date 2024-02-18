const user = {
    username : "dhairya ", 
    password : '1236',

    WelcomeMessage : function(){
        console.log('${this.username}, welcome to the website');
    }

}
user.WelcomeMessage();

// function chai (){
//     let username = "dhairya"
//     console.log(this.username)
    
    
// }
// const chai = function(){
//     let username = "dhairya"
//      console.log(this.username)


// }
const chai = () => {                    // this is arrow function in js 
    let username = "dhairya"
     console.log(this.username)
     

}
  

() => {} // this is simply a arrow functionn
const addTwo = (num1,num2) => {        // const addTwo = (num1,num2) => (num1+num2)  aavi rite pan lakhi sakiye 
    return num1+num2

}
console.log(addTwo(5,6));

