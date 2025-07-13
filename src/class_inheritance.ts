// classes & inheritance
class Person {
    username: string;
    age: number;

    constructor(username: string, age: number = 0){
        this.username = username;
        this.age = age;
    }

    greet(time?: string | number, place?: string): void {
        console.log(`Hello, ${this.username}. May be you are ${this.age} years old. ${time ? `Let's meet togather at ${time}` : ''} ${place ? `on ${place}` : ''}`)
    }
}

// create an object
const userPerson01 = new Person("Md Tanjim", 20);
// userPerson01.greet();

const userPerson02 = new Person("MD WALID", 30)
// userPerson02.greet();

const userPerson03 = new Person('Walidur Tanjim');
// userPerson03.greet();


// modifiers [public, private, protected]
// public modifire [access from anywhere]
// private modifire [only access from class]
// protected modifire [access from class & subclass]

// create a bank class
class BankAccount {
    public accountHolderName: string;
    private balance: number;
    protected accountType: string;

    constructor(accountHolderName: string, balance: number) {
        this.accountHolderName = accountHolderName;
        this.balance = balance;
        this.accountType = "Savings";
    }

    public showBalance() {
        console.log(`Your current balance is: ${this.balance}`)
    }
}

const account01 = new BankAccount("Walidur Tanjim", 10000);
// account01.showBalance();


// inheritance
class Animal {
    constructor (public animaleName: string) {

    }

    move() {
        console.log(`${this.animaleName} is moving...`)
    }
}

class Dog extends Animal {
    bark() {
        console.log(`Woof woof `)
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