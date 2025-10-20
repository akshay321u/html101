
//1
function welcomeMessage(){
    console.log("Welcome to our website!");
}
welcomeMessage();
welcomeMessage();

//2
function printDate() {
    let currentDate=new Date();
    console.log("current date "+ currentDate);
}
 printDate()

 //3
function greetUser(name){
    console.log("hello "+name);
}
greetUser("rahul");
greetUser("rah");
greetUser("ram");

//4
function calculateArea(length,width){
    let area=length*width;
    console.log("area= " +area);
}
calculateArea(10 ,2);

//5
function displayMarks(subject, marks){
    console.log( 'You scored in ');
} 
displayMarks();

//6
 function add(a, b){
    let sum=a+b;
    console.log("sum ="+sum);
 }
 add(10,10);

 //7
  function findSquare(num){
    let square=num*num;
    console.log("square ="+square)
  }
  findSquare(5);

  //8
   function isAdult(age){
    if(age>=18){
        console.log("true")
    }
    else{
        console.log("false");
    }
   }
   isAdult(20);

   //9
   const greet = (result)=>{
    return "result = " + (result -2);
}
console.log(greet(20));


//10
const getFullname=(FirstName,LastName)=>{
    return FirstName + " " +LastName;
}
console.log(getFullname("akshay","babu"))

//11
const isEven = (num)=>{
    if(num%2==0){
    return true;
    }
    else{
        return false;
    }
}
console.log(isEven(20));






