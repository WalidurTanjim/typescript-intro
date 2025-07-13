// union & intersection types

// union type
let value: string | number;
type ProductId = string | number;
const getProduct = (id: ProductId) => {
    // console.log('Product id:', id);
    return id
}
// console.log('Fetching product with id:', getProduct("asdf134a"));


// intersection type
type UserType = {
    id: number;
    username: string;
    email: string;
}
type AdminType = {
    isAdmin: boolean;
}
type AdminUser = UserType & AdminType;

const MyUser: AdminUser = {
    id: 123,
    username: 'Tanjim',
    email: 'tanjim@gmail.com',
    isAdmin: true
}

const getAdminRole = (user: AdminUser): string => {
    // console.log('Name:', user.username, "IsAdmin:", user.isAdmin)
    return `Name: ${user.username}, IsAdmin: ${user.isAdmin}`
}
// console.log(getAdminRole(MyUser));


// literal type
type Action = "start" | "pause" | "stop" | "submit" | "reset";

const handleAction = (action: Action): void => {
    console.log(`Action: ${action}`)
}

// handleAction('submit')



// type narrowing
function log(value: string | number): void {
    if(typeof value === 'string'){
        console.log(value.toUpperCase());
    }else{
        console.log(`The value is: ${value}`)
    }
}

// log(123);

function processInput(inputValue: string | number): void {
    if(typeof inputValue === 'number'){
        console.log(`Parsed as number: ${inputValue * 2}`)
    }else{
        console.log(`Parsed as string: ${inputValue.trim()}`)
    }
}

// processInput('        tanJim ')







// type guards: typeof, in operator & instanceof
// in operator type guard
// type Car = {
//     drive: {} => void
// }

// type Boat = {
//     sail: {} => void
// }

// function move(vehicle: Car | Boat) {
//     if("drive" in vehicle){
//         vehicle.drive()
//     }else{
//         vehicle.sail()
//     }
// }

// const car: Car = {
//     drive: {} => {
//         console.log("Car is driving...")
//     }
// }


// custom type guard:
type Fish = {
    swim: () => void
}
type Bird = {
    fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
function move(pet: Fish | Bird) {
    if(isFish(pet)){
        pet.swim()
    }else{
        pet.fly()
    }
}

const myFish: Fish = {
    swim: () => console.log("Fish is swiming...")
}
const myBird: Bird = {
    fly: () => console.log("Bird is flying...")
}
move(myFish);
move(myBird);