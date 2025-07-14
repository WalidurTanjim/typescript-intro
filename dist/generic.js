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
// genLog<string>("Walidur Tanjim");
// genLog<number>(123);
// genLog<boolean>(false);
