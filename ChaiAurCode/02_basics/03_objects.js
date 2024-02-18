// singleton objects , literals ni jem treat karie toh singleton naa bane pan constructor kare toh singleton thai
//object.create // constructor method of sington

//objects literals  
const mySym = Symbol("key1")

const JsUser = {
    name:"dhairya",
    [mySym]:"MYkey1",
    age:18,
    location:"sinh na thekana na hoi wala",
    email:"joshidhairya79@gmail.com",
    isLoggedIn : false,
    lastLoginDays :["Monday","Tuesday"]

}
console.log(JsUser.name)
console.log(JsUser["name"]) // agar "full name: "Dhairya Joshi" aapiu hoi toh avi rite acess kari sakai
console.log(JsUser[mySym])
JsUser.email = "dhairyajoshi1236@gmail.com"
Object.freeze(JsUser)
console.log(JsUser)


// now lets talk about functions
JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingtwo = function(){
    console.log('hello js user,${this.}');
}

console.log(JsUser.greeting)
