// we study here three imp topics 1) window 2) DOM 3) BOM
//window is global object created by browser it represent browser window here in window object it has dom bom and js core
//dom stands for document object model whole html web page converted into js code which is object is  called as  document.
//bom browser object model  :- it allow js to talk to browser of matter another content of page outside the page.
//window object is an essential part of JavaScript as it provides us with access to the browser's features. It allows us to interact with the user

 // DOM :- first of all the character are converted into the tags and then the tags are converted into token 
 // then the token are converted into the nodes and then the node is converted into the dom model 
 // Window object : it represents the current browser window. It gives access to the properties and methods associated with the web page being viewed in the browser
 // in this process there are two types of nodes one is element node and another is attribute node.
 // get element by id  
 console.log(document.getElementById("demo"));// it is called on the document object and it always return the single object
 // it return single object cause we know id is always unique

 // getting elements by class name
 var x = document.getElementsByClassName("demo");
// get element by tag name 
//both method used document object , both return multiple items ,both list return in form of array 
var y=document.getElementsByTagName('p');
// queries selector pan aa first element aaj dei 
//it is a css selector so you can use any valid css selector like h1,div,#id,.class etc..
var z=document.querySelector(".demo");
console.log(z);
// if you want to select multiple elements at once you have to use querySelectorAll()
var demo=document.querySelectorAll('.demo');
console.log(demo);

// update the existing content
// inner html class ni andar jetla pan element hoi e badha dekahade

var para=document.getElementById("para");
// outer html
var html=para.outerHTML;
console.log(html);
// text content
var txt=para.textContent;
console.log(txt);
// data
var dat=para.dataset.info;
console.log(dat);
// inner html ma render thai aane text ma text aaj samje 
// inner text hidden na batde text content na comparison ma

var trt=para.innerText;
console.log(trt);
// adding new element
var div=document.createElement("div");
div.innerHTML="<span>Hello</span>";
document.body.appendChild(div);
// creating attributes
var attr=document.createAttribute("title");
attr.value="hello";
div.setAttributeNode(attr);
// creating text node
var tn=document.createTextNode("World!");
div.appendChild(tn);
// creating element with attributes
var ele=document.createElement("img");
ele.src="image.png";
ele.alt="Image Description";
ele.textContent ="i am text"
// style attribute
ele.style.color="red";

// inner adjacent html
var adj1=div.innerHTML+ " <b>Bold Text</b>"
console.log(adj1)
var adj2="<i>Italic Text</i> "+div.innerHTML;
console.log(adj2)
// remove element 
div.parentNode.removeChild(div);
