"use strict";
// union & intersection types
// union type
let value;
const getProduct = (id) => {
    // console.log('Product id:', id);
    return id;
};
const MyUser = {
    id: 123,
    username: 'Tanjim',
    email: 'tanjim@gmail.com',
    isAdmin: true
};
const getAdminRole = (user) => {
    // console.log('Name:', user.username, "IsAdmin:", user.isAdmin)
    return `Name: ${user.username}, IsAdmin: ${user.isAdmin}`;
};
const handleAction = (action) => {
    console.log(`Action: ${action}`);
};
// handleAction('submit')
// type narrowing
function log(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
    else {
        console.log(`The value is: ${value}`);
    }
}
// log(123);
function processInput(inputValue) {
    if (typeof inputValue === 'number') {
        console.log(`Parsed as number: ${inputValue * 2}`);
    }
    else {
        console.log(`Parsed as string: ${inputValue.trim()}`);
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function move(pet) {
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
}
const myFish = {
    swim: () => console.log("Fish is swiming...")
};
const myBird = {
    fly: () => console.log("Bird is flying...")
};
move(myFish);
move(myBird);
