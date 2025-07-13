"use strict";
// classes & inheritance
class Person {
    constructor(username, age = 0) {
        this.username = username;
        this.age = age;
    }
    greet(time, place) {
        console.log(`Hello, ${this.username}. May be you are ${this.age} years old. ${time ? `Let's meet togather at ${time}` : ''} ${place ? `on ${place}` : ''}`);
    }
}
// create an object
const userPerson01 = new Person("Md Tanjim", 20);
// userPerson01.greet();
const userPerson02 = new Person("MD WALID", 30);
// userPerson02.greet();
const userPerson03 = new Person('Walidur Tanjim');
// userPerson03.greet();
// modifiers [public, private, protected]
// public modifire [access from anywhere]
// private modifire [only access from class]
// protected modifire [access from class & subclass]
// create a bank class
class BankAccount {
    constructor(accountHolderName, balance) {
        this.accountHolderName = accountHolderName;
        this.balance = balance;
        this.accountType = "Savings";
    }
    showBalance() {
        console.log(`Your current balance is: ${this.balance}`);
    }
}
const account01 = new BankAccount("Walidur Tanjim", 10000);
// account01.showBalance();
// inheritance
class Animal {
    constructor(animaleName) {
        this.animaleName = animaleName;
    }
    move() {
        console.log(`${this.animaleName} is moving...`);
    }
}
class Dog extends Animal {
    bark() {
        console.log(`Woof woof `);
    }
}
const myDog = new Dog("Tom");
// myDog.move();
// myDog.bark();
class Cat extends Animal {
    bark() {
        console.log(`Meu meu`);
    }
}
const myCat = new Cat('Kitty');
// myCat.bark();
// myCat.move();
