interface Drivable {
    start: () => void;
    stop: () => void;
}

class Car implements Drivable {
    start() {
        console.log('Car is start...');
    }

    stop() {
        console.log('Car is stop...')
    }
}

const myCar = new Car();
// myCar.stop();