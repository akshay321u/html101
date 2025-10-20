//for loop
for(let i=1; i<=5; i++){
    console.log("number"+i);
}

//while
let count=1;
while(count<=3){
    console.log("count is"+ count);
    count++;
}

//do while
//true
let num=1;
do{
    console.log("number is"+num);
    num++;

}while(num<=3);

//false
let num1=5;
do{
    console.log("number is"+num1);
    num1++;

}while(num1<=3);



let message="hello world";
console.log(message);
console.log("length"+message.length);
console.log("first character"+message.length[11]);


let msg="akshay babu"
//uppercase
console.log(msg.toUpperCase());
//lowercase
console.log(msg.toLowerCase());
//includes
console.log(msg.includes("sh"));
//trim
console.log(msg.trim());
//slice
console.log(msg.slice(0,4));
//charAt
console.log(msg.charAt(5));
//concatination
let FirstName="akshay";
let LastName="B";
let FullName=FirstName +" "+ LastName;
console.log(FullName);

//iterals
let name="akshy";
let course="mern stack";
console.log(`my name is ${name} i am learning ${course}`);

let poem=`roses are red ,
violets are blue,
and so you are`;
console.log(poem);

//array
let fruits=["apple","mango","banana"];
console.log(fruits)
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);


let number=[1,2,3];
number.push(4);
console.log(number);
number.pop();
console.log(number);
number.shift();
console.log(number);
number.unshift(12);
console.log(number);

let double=number.map(n=>n*2);
console.log(double);

let found=number.find(n=> n>1);
console.log(found);

let fruit=["apple","mango","banana"];
let newFruit= fruit.slice(1,3);
console.log(newFruit);

let fruit1=["apple","mango","banana"];
console.log(fruit1);
fruit1.splice(1,1,"grapes");
console.log(fruit1);
fruit1.reverse();
console.log(fruit1);
fruit1.sort();
console.log(fruit1);
console.log(fruits.join(","));
