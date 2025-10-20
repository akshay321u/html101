//1
class person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

greet(){
    console.log(`hi,i am ${this.name} and i am ${this.age}years old.`)
}
}
const person1=new person("abc",25);
const person2=new person("def",30);
person1.greet();
person2.greet();



//2
//class car{
  //  constructor(brand,year){
    //    this.brand=brand;
      //  this.year=year;
    //}
   // showDetails(){
    //    console.log(`${this.brand} was made in ${this.year}`);

    //}
//}
//const mycar=new car("toyota",2020);
//mycar.showDetails();

//3
class student{
    constructor(name,mark){
        this.name=name;
        this.mark=mark;
    }

greet(){
    console.log(`hi,i am ${this.name}i got ${this.mark} marks. `)
}
}
const student1=new student("abc",25);
const student2=new student("def",30);
student1.greet();
student2.greet();


//4
class calculator{
    add(a,b){
        return a+b;
    }
    multiply(a,b){
        return a*b;
    }
}
const calc=new calculator();
console.log(calc.add(10,15));
console.log(calc.multiply(10,5));

//inheritance
class animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes a noise`);
    }

}
class Dog extends animal{
    bark(){
        console.log(`${this.name} barks`);
    }
}
const dog=new Dog("tommy");
dog.speak();
dog.bark();


//super()
class Vehicle{
    constructor(type){
    this.type=type;
}
start(){
    console.log(`${this.type} is starting`);
}
}
class Car extends Vehicle{
    constructor(type,brand){
        super(type);
        this.brand=brand;
    }
    details(){
        console.log(`this is a${this.brand} ${this.type} `);
    }
 start(){
    console.log(`${this.type} is ready to go`);   
}
}
const Car= new Car("Car","toyota");
Car.details();
Car.start();
