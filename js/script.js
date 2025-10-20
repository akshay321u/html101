//variable
//var

var name = "Akshy";
console.log(name);

//let

let fullname = "akshy";
fullname = "akshy b";
console.log(fullname);

//const
const isStudent = true;
console.log(isStudent);

let city = "banglore";
console.log(city);

//number
let age = 25;

//string
let string = "akshy";

//null
const user = null;

//boolean
const isLoggedIn = true;
console.log(isLoggedIn);

//object
let person = {
    name:"akshy",
    age:25,
};
console.log(person);

const student = {
    name:"amegh",
    age:20,
    mark:80,
    grade:"A"

};
console.log(student);

const product = {
    name: "book",
    price:50,
    offer:50,
};
console.log(product);

const btn = btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const resetbtn = document.getElementById("resetbtn");
const countLabel = document.getElementById("countLabel");
let count = 0;
btn1.onclick = function(){
    count--;
    countLabel.textContent = count;
}
btn2.onclick = function(){
    count++;
    countLabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

//get element by class name
var a=document.getElementsByClassName(head1);
a[2].innerText = "good morning";
a[1].style.color="blue";

//get element by tag name
let b=document.getElementsByTagName("h1");
console.log(b);



