"use strict";
class CarClass {
    constructor(carName, carModel, brand, menufactured, topSpeed) {
        this.carName = carName;
        this.carModel = carModel;
        this.brand = brand;
        this.menufactured = menufactured;
        this.topSpeed = topSpeed;
    }
    canMove() {
        console.log(`${this.carName}, ${this.carModel}, ${this.brand}, ${this.menufactured}, ${this.topSpeed} km/h`);
    }
}
class ElectricCar extends CarClass {
    charge() {
        console.log(`${this.brand} is charging`);
    }
}
const newCar = new CarClass("Mercedes Benz", "GLS 450", "Mercedes Benz", 2015, 220);
newCar.canMove();
