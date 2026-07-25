let name = "John";
let age = 30;
let sentance = `Hii ${name} how are you?. You are ${age} years of old`;
console.log(sentance);

//      ARRAY in JS
let fruits = ["apple", "orange", "kiwi"];
// Array is an ordered set of elements which is having an index
//the index count starts from 0
let result = fruits[1];
console.log(fruits[0]);//apple
console.log(result);//orange
 
console.log(fruits. Length);

//  OBJECT
//I need a key value pair for creating the object
// it is a collection of data
let student= {name: "John", age: 20, school: "JNV"};
// dot notation
console.log(student.name);//john
console.log(student.age);//20
 
 
//bracket notation
console.log(student["name"]);//john
 
 // FUNCTION
// it is a reusable block of code
//3 ways we can write a function
// method 1-> function declaration
function greet(){
    return "hello world";
}
console.log(greet());
 
function addition(x,y){
    return "The sum is: " + x+y ;
}
console.log(addition(2,3));
 
// method 2 --> the function is stored inside the variable
let addition = function(x,y){
    return x+y;
}
console.log(addition(4,5));
 
//method 3-->Arrow funtion
let addition = (x,y) => x+y; //single expression ( 2 parameter)
let square = x => x*x; // single parameter
let sayHi = () => "helloo"; //no ConnectionParameters(empty parameter)
let Tax = (p, r)=>{
    return p+r;
};
 
//Default parameters
function greetUser(name = "Guest"){
    return `welcome ${name}`;
}
console.log(greetUser());//welcome Guest
console.log(greetUser("Maria"));//welcome Maria
 
 
 
 