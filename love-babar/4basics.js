// functionn is a block of code that fulfill the specific task
//we use it for the reusablity not re-writing 
// function declaration
function run ()
{
    console.log("running");

}
// this is how a function is declare 
run(); // this is how a function call
// hoisting :- process of moving function declaration to the top of file done by the js engine automatically
// function assignment
let stand = function walk (){
    console.log("walking")

};

stand();
let jump = stand;
jump();

// arguments

// rest opreator  
// default parameter
// getter setter     
// try and catch block
// scope
// reducing an array 