//function definition
function greet(){
    console.log("hello world");
}
greet();//calling the function

//function with parameters
function greetByName(name){
    console.log("hello "+name);
}
greetByName("rahul");
greetByName("rah");

//method
let student={
    name:"rahul",
    greet:function(){
        console.log("hello, my name is " + this.name)

    }

};
student.greet();

//arrow function
const greet1=(name)=>{
    return "hello "+name;
}
console.log(greet1("rahul"));