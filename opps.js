/** @format */

//  class calculation {

//     constructor(num1,num2){
//         this.num1=num1;
//         this.num2=num2;
//     }

//     // addtion

//     addtion(){

//         console.log(this.num1+this.num2);

//     };
//      // substraction

//      substraction(){

//         console.log(this.num1-this.num2);

//     };

//     // multiplication

//     multiplication(){

//         console.log(this.num1*this.num2);

//     };

//     // division

//     division(){

//         console.log(this.num1/this.num2);

//     };

//  }

// const number1 = new calculation(5,20)

// number1.addtion();
// number1.substraction();
// number1.multiplication();
// number1.division();

// class vechiel{

//     constructor(model,color,flueType,){

//         this.model=model;
//         this.flueType=flueType;
//         this.color=color;

//     }
// }

// class tata extends vechiel{

// constructor(model,color,flueType,price){

//     super(model,flueType,color)
//     this.price=price

// }

//   listmodel(){
//     console.log(this.model,this.color,this.flueType,this.price);
//   }

// }

// const  vechielList= new tata("ab21","red","petrol",12345);

// vechielList.listmodel();

// class Animals{

//     constructor(gender,color,leg){

//         this.gender=gender;
//         this.color=color;
//         this.leg=leg
//     }
// }

// class Dog extends Animals{

//     constructor(gender,color,leg,sounds){
//         super(gender,color,leg)
//         this.sounds=sounds;
//     }

//     dogdeatils(){
//     console.log(`The Dog is ${this.color} color,and is ${this.gender},leg is ${this.leg},this sound is ${this.sounds}`);
// }
// }

// class Cat extends Animals{

//     constructor(gender,color,leg,sounds){
//         super(gender,color,leg);
//         this.sounds=sounds;
//     }

//     catdeatils(){
//         console.log(`The Cat is ${this.color} color,and is ${this.gender},leg is ${this.leg},this sound is ${this.sounds}`);

//     }
// }

// let catinormation=new Cat("male","black",4,"meow")

// let doginormation=new Dog("male","black",4,"wowow");

// catinormation.catdeatils();

// doginormation.dogdeatils();

// class Employee{

//     constructor(Name,age,role){
//         this.Name=Name;
//         this.age=age;
//         this.role=role
//     }

//     EmployeeRole(){
//         console.log(`Name:${this.Name}, Age is ${this.age} ,Role${this.role}`);
//     }

// }

// class Manager extends Employee{

//      constructor(Name,age,role,teamMember){

//         super(Name,age,role)

//         this.teamMember=teamMember;

//      }

//      EmployeeDeatils(){

//         super.EmployeeRole()
//         console.log(`Manage a team of ${this.teamMember}`);

//      }
// }

// let empinfo=new Manager("balaji",25,"Hr",8)

// empinfo.EmployeeDeatils()

// class School{
//     constructor(Name,age){
//         this.Name=Name;
//         this.age=age;
//     }
//     studentINfo(){

//     }
// }

// geter and seter method in OOPS

// class  Roledeatils{

//     constructor(role){

//         this.role=role
//     }

//     get roleInformation() {
//         return this.role;
//     }

//     set roleInformation(newRole) {

//         if(newRole != '')
//         {
//             this.role = newRole;
//             console.log(`your role is ${this.role}`);
//         }
//         else{
//             console.log("empty field");

//         }

//     }
// }

// let role = new Roledeatils('cse');
// // console.log(role);

// role.roleInformation = 'mech';
// // console.log(role.roleInformation);

// console.log(roleInformation());

// roleinfo.roleInformation = "mech";

// Encapsulation

class bank {
  #balance;

  constructor(balanceInfo) {
    this.#balance = balanceInfo;
  }

  get totalBalance() {
    return this.#balance;
  }

  set totalBalance(value) {
    if (value !== "") {
      this.#balance = value;
      console.log(`Your total balance is ${this.#balance}`);
    } else {
      console.log("empty amount Enter the amount");
    }
  }
}

let balanceInfo = new bank(5000);

console.log(balanceInfo.totalBalance);

balanceInfo.totalBalance = 10000;

// polimarization

class Movie {
  hero() {
    console.log("hero of the movie");
  }
}

class Leo extends Movie {
  hero() {
    console.log("hero of the movie is vijay !");
  }
}

class jailer extends Movie {
  hero() {
    console.log("hero of the movie is rajini !");
  }
}

const LeoHero = new Leo();
LeoHero.hero();

const JailerHero = new jailer();
JailerHero.hero();

// static

class clulation {
  static sub(a, b) {
    return a - b;
  }

  static add(a, b) {
    return a + b;
  }

  static multi(a, b) {
    return a * b;
  }
}
console.log(clulation.sub(5, 4));

console.log(clulation.add(5, 5));

console.log(clulation.multi(5, 5));

// abbsrtaction
