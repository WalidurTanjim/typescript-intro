// Project: vehicle management with TypeScript
interface VehicleInterface {
    carName: string;
    carModel: string;
    brand: string;
    menufactured: number;
    topSpeed: number;
    canMove(): void;
}

class CarClass implements VehicleInterface {
    carName: string;
    carModel: string;
    brand: string;
    menufactured: number;
    topSpeed: number;

    constructor(carName: string, carModel: string, brand: string, menufactured: number, topSpeed: number) {
        this.carName = carName;
        this.carModel = carModel;
        this.brand = brand;
        this.menufactured = menufactured;
        this.topSpeed = topSpeed;
    }

    canMove(): void {
        console.log(`${this.carName}, ${this.carModel}, ${this.brand}, ${this.menufactured}, ${this.topSpeed} km/h`)
    }
}

class ElectricCar extends CarClass {
    charge() {
        console.log(`${this.brand} is charging`)
    }
}

const newCar = new CarClass("Mercedes Benz", "GLS 450", "Mercedes Benz", 2015, 220);
newCar.canMove();