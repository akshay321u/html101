//question 1
let colors=["red","green","blue"];
colors.push("yellow");
console.log(colors);
colors.pop();
console.log(colors);
colors.unshift("black");
console.log(colors);
colors.shift();
console.log(colors);


//question 2
let number=[2,4,6,8];
let double=number.map(n=>n*2);
console.log(double);
let found=number.find(n=> n>5);
console.log(found);


//question 3
let array1= [10, 20];
let array2=[30, 40];
let array3=array1.concat(array2);
console.log(array3);


//question 4
let fruits= ["Apple", "Mango", "Orange"];
fruits.splice(1,1,"grapes");
console.log(fruits);
fruits.reverse();
console.log(fruits);
fruits.sort();
console.log(fruits);


//question 5
let lang= ["HTML", "CSS", "JavaScript"];
console.log(lang.join(','))
lang.push("react");
console.log(lang);
lang.sort();
console.log(lang);