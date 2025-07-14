"use strict";
// function withour generic
const logString = (value) => {
    console.log(value);
};
const logNumberOrBoolean = (value) => {
    console.log(value);
};
// logNumberOrBoolean(false);
// function with generic
const genLog = (value) => {
    console.log(value);
};
const userResponse = {
    success: true,
    data: {
        name: "MD WALIDUR RAHMAN TANJIM"
    }
};
const numberResponse = {
    success: false,
    data: 25
};
const logInterface = (value) => {
    console.log("Log interface value is:", value.data);
};
// logInterface(userResponse);
// logInterface(numberResponse);
// constraints
const printLength = (item) => {
    console.log(item.length);
};
printLength("MD WALIDUR");
printLength(['Tanjim', 'Walidur']);
printLength([0, 1, 2, 3, 4, 5]);
