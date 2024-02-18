// objects
const reactangle = {
    length : 1,
    breadth : 2,
    hieght : 3,
    wieght : 6,

    draw : function(){
        console.log("aane function kevai ho"); //  agar koi function object ni andar call thai to ene mehtod kevai 
        // aane a function ne call karva rectangle.draw() no use thai aana thi function call thai aane value .length.

    }


};

// there are two ways to create the object 1) factory function 2) CONSTRUCTION function
// factory function 
function createRectangle(length,breadth,hieght,wieght){

    return reactangle = {
     length,
     breadth,
     hieght,
     wieght,

    draw : function(){                          // draw(){task} aavi rite pan aapde function declare kari sakiye
        console.log("aane function kevai ho");
    }
};
}
let rectangleObj1 = createRectangle(); // createrectangel aapde call karie toh e function call thai anne object banave 
// aae pachi e ek variable ma store thai bija variable ma ,, aane pacha apde pela function thi object return thi return karaviye
let rectangleObj2 = createRectangle(4,5,6,7);
let rectangleObj3 = createRectangle(8,9,10,11);



// construction function -> pascal notaion  its intialize/define property aur method
function Rectangle (){
    this.length =1; // this keyword refter to the current object
    this.breadth = 2;
    this.draw = function(){
        console.log("aavi rite thai construction function")

    }
}
// object creation using construction function// new ek evo function che je empty object return kare
let rectangleObj10 = new reactangle();
rectangleObj10.color = "yellow"; // dynamic nature of js objects that we can add after the declaration
delete rectangleObj10.color;
  

// objects cloning 1)iteration 2)assign 3) spread 

