// immediately invoked function expression(IIFE)
(function chai(){
    console.log("baane ho chai");
}
)(); // aavi rite iife use thai , kyarek global scope na variable na lidhhe problem create thai ena mate iife vaprai
((name)=> {
  console.log('db connected two ${name}');

})('dhairya')
