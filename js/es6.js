const colors=["red","green","blue"];
const[third,second,first]=colors
console.log(third);
console.log(second);
console.log(first);

//const numbers=[10,20,30,40];
//const[a, , c]=numbers;
//console.log(a);
//console.log(c);
//console.log(b);

let x=10;
let y=20;
[x,y]=[y,x];
console.log(x,y);

const arr=[1,[2,3]];
const[a,[b,c]]=arr;
console.log(a,b,c);

const fruits=["orange","apple","mango"];
fruits.forEach(fruits=>console.log(fruit))

const age=[15,22,37,10];
const adult=age.filter(age=>age>=18);
console.log(adult);


const numb=[10,20,30];
const total=numb.reduce((sum,numb)=>sum +numb)
console.log(total);

//find()
const users=[
    {id:1,name:"rahul"},
    {id:2,name:"ram"}
];
console.log(users);
const user=users.find(u=>u.id===2);
console.log(user.name);

//findindex()
const numbr=[10,20,30,40,50];
const index=Number.findindex(n=> m>30);
console.log(index);

//some()
const marks=[35,57,75];
console.log(marks.some(m=> m>70));

//every()
const mark=[50,70,75];
console.log(marks.every(m=> m>=60));

//include()
const fruit=["orange","apple","mango"];
console.log(fruit.include["banana"]);




